import styled from "react-emotion";
import { ShadowKeys } from "..";
import { Flex } from "../layout";
import { shadows } from "../ui";

interface CardProps {
  height?: string;
  hover?: ShadowKeys;
  width?: string;
  margin?: string;
  padding?: string;
  background?: string;
  color?: string;
  flex?: boolean;
  level?: ShadowKeys;
}

export const Card = styled(Flex)<CardProps>(
  {
    fontSize: "1rem",
    overflow: "hidden",
    padding: "1rem",
    position: "relative",
    transition: "all 0.3s cubic-bezier(.25, .8, .25, 1)"
  },
  props => ({
    "&:hover": {
      boxShadow: props.hover ? shadows[props.hover || "level1"] : undefined
    },
    background: props.background || props.theme.componentBackgroundLight,
    borderRadius: props.theme.borderRadius,
    boxShadow: props.level ? shadows[props.level || "level1"] : undefined,
    color: props.color,
    display: props.flex ? "flex" : "block",
    height: props.height,
    margin: props.margin,
    padding: props.padding,
    width: props.width
  })
);
                                                   