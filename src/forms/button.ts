import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";

export interface ButtonProps {
  color?: string;
  disabled?: boolean;
  type?: string;
  margin?: string;
  isRound?: boolean;
}

export const Button = withTheme(
  styled("button")<ButtonProps>(
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
      color: theme.white,
      cursor: "pointer",
      outline: "none",
      padding: " 0.5rem",
      transition: "background 0.8s"
    },
    props => {
      const isRoundStyles = props.isRound
        ? {
            borderRadius: "100%",
            height: "2rem",
            minHeight: "2rem",
            minWidth: "2rem",
            overflow: "hidden",
            width: "2rem"
          }
        : {};

      return {
        ...isRoundStyles,
        background: props.disabled ? theme.grey : props.color
      };
    }
  )
);

Button.defaultProps = {
  color: "grey",
  type: "text"
};

export const PrimaryButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? theme.grey : theme.primary
  }))
);

export const OutlineButton = withTheme(
  styled(Button)<ButtonProps>({
    "&:active": {
      backgroundColor: theme.primary,
      backgroundSize: "100%",
      color: theme.white,
      transition: "background 0s"
    },
    "&:hover": {
      background:
        "#47a7f5 radial - gradient(circle, transparent 1 %, #47a7f5 1 %) center / 15000 %"
    },
    background: theme.white,
    border: `solid 1px ${theme.primary}`,
    color: theme.primary
  })
);
