import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import * as React from "react";
import { ClickOutside } from "../effects";

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

interface State {
  isOpen: boolean;
}

interface Props {
  trigger: (handler: () => void) => JSX.Element;
}

export class DropDown extends React.Component<Props, State> {
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
      <ClickOutside onClick={this.close}>
        {this.props.trigger(this.open)}
        {this.state.isOpen && (
          <CollapsibleNavWrapper onClick={this.close}>
            {this.props.children}
          </CollapsibleNavWrapper>
        )}
      </ClickOutside>
    );
  }
}
