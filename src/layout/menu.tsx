import * as React from "react";
import styled from "react-emotion";
import { WindowSize } from "../effects";
import { ArrowDownIcon } from "../icons";
import { Flex } from "../layout";
import { DropDown } from "./dropDown";
import { Tab } from "./tabs";

interface Props {
  breakPoint: number;
  label: React.ReactNode;
  justifyMenu?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const Menu: React.SFC<Props> = ({
  breakPoint,
  children,
  label,
  justifyMenu
}) => {
  return (
    <WindowSize
      render={width => {
        if (width >= breakPoint) {
          return <InlineMenu justifyMenu={justifyMenu} children={children} />;
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

const SVGContainer = styled("div")({
  svg: {
    marginLeft: "4px"
  }
});
const LabelTab = Tab(SVGContainer);

export const InlineMenu: React.SFC<Pick<Props, "justifyMenu">> = ({
  children,
  justifyMenu
}) => {
  return <Flex justifyContent={justifyMenu}>{children}</Flex>;
};
