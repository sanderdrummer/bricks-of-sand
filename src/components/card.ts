import styled from "react-emotion";
import { Flex } from "../layout";

interface CardProps {
  height?: string;
  hover?: boolean;
  width?: string;
  margin?: string;
  padding?: string;
  background?: string;
  color?: string;
  flex?: boolean;
}

export const Card = styled(Flex)<CardProps>(
  {
    borderRadius: "2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    fontSize: "1rem",
    overflow: "hidden",
    padding: "1rem",
    position: "relative",
    transition: "all 0.3s cubic-bezier(.25, .8, .25, 1)"
  },
  props => ({
    "&:hover": {
      boxShadow: props.hover
        ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
        : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
    },
    background: props.background || props.theme.white,
    color: props.color,
    display: props.flex ? "flex" : "block",
    height: props.height,
    margin: props.margin,
    padding: props.padding,
    width: props.width
  })
);
