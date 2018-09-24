import styled from "react-emotion";

export interface FlexProps {
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
export const Flex = styled("div")<FlexProps>(
  {
    display: "flex"
  },
  props => ({
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent
  })
);

interface ColumnProps {
  margin?: string;
  padding?: string;
  flex?: string;
}
export const Column = styled("div")<ColumnProps>({}, props => ({
  flex: props.flex,
  margin: props.margin,
  padding: props.padding
}));
