import styled from "@emotion/styled";
import { Block } from "./block";

export interface FlexProps {
  doFlex?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
}
export const Flex = styled(Block)<FlexProps>(
  {
    display: "flex"
  },
  props => ({
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    flex: props.doFlex,
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    justifyContent: props.justifyContent
  })
);

interface ColumnProps {
  flex?: string;
}
export const Column = styled(Block)<ColumnProps>({}, props => ({
  flex: props.flex
}));
