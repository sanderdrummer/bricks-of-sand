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
        color: props.disabled
          ? props.theme.textSubtile
          : props.color || props.theme.white
      };
    }
  )
);

Button.defaultProps = {
  type: "text"
};

export const PrimaryButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? props.theme.textSubtile : props.theme.primary,
    color: props.disabled ? props.theme.white : props.theme.primary
  }))
);

export const RedButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? props.theme.red : props.theme.primary,
    color: props.disabled ? props.theme.white : props.theme.primary
  }))
);

export const GreenButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled
      ? props.theme.mainBackground
      : props.theme.greenLight,

    border: `1px solid ${
      props.disabled ? props.theme.greenLight : "transparent"
    }`,
    color: props.disabled ? props.theme.greenLight : props.theme.green,
    ["&:active"]: {
      background: props.theme.greenHover,
      color: props.theme.white
    },
    ["&:hover"]: {
      background: props.disabled
        ? props.theme.mainBackground
        : props.theme.greenHover
    }
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
