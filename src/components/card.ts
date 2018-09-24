import styled from "react-emotion";

interface CardProps {
  height?: string;
  hover?: boolean;
  width?: string;
  margin?: string;
  padding?: string;
  background?: string;
  color?: string;
}

export const Card = styled("div")<CardProps>(
  {
    fontSize: "1rem",
    overflow: "hidden",
    padding: "1rem",
    position: "relative",
    borderRadius: "2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25, .8, .25, 1)"
  },
  props => ({
    background: props.background || props.theme.white,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    height: props.height,
    color: props.color,
    "&:hover": {
      boxShadow: props.hover
        ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
        : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
    }
  })
);
