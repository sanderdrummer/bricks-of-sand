import { withTheme } from "emotion-theming";
import * as React from "react";
import styled from "react-emotion";
import { ClickOutside, WindowSize } from "../effects";
import { Tab } from "./tabs";
import { ArrowDownIcon } from "../icons";

interface Props {
  breakPoint: number;
  label: React.ReactNode;
}

export const Menu: React.SFC<Props> = ({ breakPoint, children, label }) => {
  return (
    <WindowSize
      render={width => {
        if (width >= breakPoint) {
          return <InlineMenu children={children} />;
        } else {
          return <CollapsibleMenu label={label} children={children} />;
        }
      }}
    />
  );
};

interface CollapsibleMenuProps {
  label: React.ReactNode;
}

interface CollapsibleMenuState {
  isOpen: boolean;
}

const SVGContainer = styled("div")({
  svg: {
    marginLeft: "4px"
  }
});
const LabelTab = Tab(SVGContainer);

const CollapsibleNavWrapper = withTheme(
  styled("div")(
    {
      a: {
        display: "block"
      },
      padding: "1rem",
      position: "absolute",
      zIndex: 500
    },
    ({ theme }) => ({
      background: theme.componentBackgroundLight,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows.level2
    })
  )
);

export class CollapsibleMenu extends React.Component<
  CollapsibleMenuProps,
  CollapsibleMenuState
> {
  public state = { isOpen: false };
  public lock = false;

  public open = () => {
    if (!this.lock) {
      this.setState({ isOpen: true });
      this.lock = true;
    } else {
      this.close();
    }
  };

  public close = () => {
    this.setState({ isOpen: false });
    this.lock = false;
  };

  public render(): JSX.Element {
    return (
      <div>
        <ClickOutside onClick={this.close}>
          <LabelTab className="active" onClick={this.open}>
            {this.props.label} <ArrowDownIcon />
          </LabelTab>
          {this.state.isOpen && (
            <CollapsibleNavWrapper onClick={this.close}>
              {this.props.children}
            </CollapsibleNavWrapper>
          )}
        </ClickOutside>
      </div>
    );
  }
}

export const InlineMenu: React.SFC = ({ children }) => {
  return <div>{children}</div>;
};
