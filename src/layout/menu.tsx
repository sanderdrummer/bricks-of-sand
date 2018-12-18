import styled from "@emotion/styled";
import * as React from "react";
import { WindowSize } from "../effects";
import { ArrowDownIcon } from "../icons";
import { Flex } from "../layout/flex";
import { DropDown } from "./dropDown";
import { Tab } from "./tabs";

interface Props {
  breakPoint: number;
  label: React.ReactNode;
  inlineMargin?: string;
  justifyMenu?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const SVGContainer = styled("div")({
  svg: {
    marginLeft: "4px",
  },
});
const LabelTab = Tab(SVGContainer);

const InlineContainer = styled(Flex)<Pick<Props, "inlineMargin">>(
  {},
  ({ inlineMargin }) => ({
    a: { margin: inlineMargin },
  })
);

export const Menu: React.SFC<Props> = ({
  breakPoint,
  children,
  label,
  inlineMargin,
  justifyMenu,
}) => {
  return (
    <WindowSize
      render={width => {
        if (width >= breakPoint) {
          return (
            <InlineMenu
              inlineMargin={inlineMargin}
              justifyMenu={justifyMenu}
              children={children}
            />
          );
        } else {
          return (
            <DropDown
              trigger={open => (
                <LabelTab className="active" onClick={open}>
                  {label} <ArrowDownIcon />
                </LabelTab>
              )}
              children={children}
            />
          );
        }
      }}
    />
  );
};

export const InlineMenu: React.SFC<
  Pick<Props, "justifyMenu" | "inlineMargin">
> = ({ children, justifyMenu, inlineMargin }) => {
  return (
    <InlineContainer inlineMargin={inlineMargin} justifyContent={justifyMenu}>
      {children}
    </InlineContainer>
  );
};
