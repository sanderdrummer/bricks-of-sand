import styled from "react-emotion";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";

export interface ButtonProps {
  color?: string;
  disabled?: boolean;
  type?: string;
  margin?: string;
}

export const Button = styled("button")<ButtonProps>(
  {
    "&:active": {
      backgroundColor: "#fff",
      backgroundSize: "100%",
      transition: "background 0s"
    },
    "&:hover": {
      background:
        "#47a7f5 radial - gradient(circle, transparent 1 %, #47a7f5 1 %) center / 15000 %"
    },
    backgroundColor: "#2196f3",
    backgroundPosition: "center",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 0 4px #999",
    color: "white",
    cursor: "pointer",
    outline: "none",
    padding: " 0.5rem",
    transition: "background 0.8s"
  },
  props => ({
    background: props.disabled ? theme.grey : props.color
  })
);

Button.defaultProps = {
  color: "grey",
  type: "text"
};
