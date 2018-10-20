import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";

export interface ButtonProps {
  color?: string;
  background?: string;
  disabled?: boolean;
  type?: string;
  margin?: string;
  isRound?: boolean;
}

export const Button = withTheme(
  styled("button")<ButtonProps>(
    {
      backgroundPosition: "center",
      border: "none",
      color: theme.white,
      cursor: "pointer",
      outline: "none",
      padding: " 0.5rem",
      transition: "background 0.8s"
    },
    props => {
      const isRoundStyles = props.isRound
        ? {
            height: "2rem",
            minHeight: "2rem",
            minWidth: "2rem",
            overflow: "hidden",
            width: "2rem"
          }
        : {};

      return {
        ...isRoundStyles,
        background: props.disabled ? theme.white : props.background,
        borderRadius: props.isRound ? "100%" : props.theme.borderRadius,
        color: props.disabled ? theme.textSubtile : props.color
      };
    }
  )
);

Button.defaultProps = {
  type: "text"
};

export const PrimaryButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? theme.grey : theme.primary
  }))
);

export const OutlineButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.theme.white,
    border: `solid 1px ${
      props.disabled
        ? props.theme.textSubtile
        : props.background || props.theme.primary
    }`,
    color: props.disabled ? props.theme.textSubtile : props.theme.primary
  }))
);
