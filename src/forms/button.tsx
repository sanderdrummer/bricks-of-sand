import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import * as React from "react";
import { AcceptIcon, CancelIcon } from "../icons";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";

export interface ButtonProps {
  color?: string;
  background?: string;
  disabled?: boolean;
  type?: string;
  margin?: string;
  isRound?: boolean;
  fontSize?: string;
  hasShadow?: boolean;
  transform?: string;
  padding?: string;
}

export const Button = withTheme(
  styled("button")<ButtonProps>(
    {
      alignContent: "center",
      backgroundPosition: "center",
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      transition: "background 1s",
    },
    props => {
      const isRoundStyles = props.isRound
        ? {
            height: "2rem",
            minHeight: "2rem",
            minWidth: "2rem",
            overflow: "hidden",
            width: "2rem",
          }
        : {};

      return {
        ...isRoundStyles,
        "&:hover": {
          background: props.background || props.theme.themedWhite,
        },
        background: props.background,
        borderRadius: props.isRound ? "100%" : props.theme.borderRadius,
        boxShadow: props.hasShadow ? theme.shadows.level2 : "none",
        color: props.color || props.theme.textHighlight,
        margin: props.margin,
        opacity: props.disabled ? 0.5 : 1,
        outlineColor: props.theme.primary,
        padding: props.padding || "0.5rem",
        svg: {
          fill: props.disabled
            ? props.theme.lightGrey
            : props.color || props.theme.textHighlight,
          maxHeight: props.fontSize || "1rem",
          maxWidth: props.fontSize || "1rem",
          transform: props.transform,
        },
      };
    }
  )
);

Button.defaultProps = {
  type: "text",
};

export const PrimaryButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    "&:hover": {
      background: props.theme.primary,
    },
    background: props.theme.primary,
    color: props.theme.themedWhite,
    opacity: props.disabled ? 0.5 : 1,
    svg: {
      fill: props.theme.themedWhite,
    },
  }))
);

export const RedButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? "transparent" : props.theme.redLight,

    border: `1px solid ${
      props.disabled ? props.theme.redLight : "transparent"
    }`,
    color: props.disabled ? props.theme.redLight : props.theme.red,
    ["&:active"]: {
      background: props.theme.redHover,
      color: props.theme.themedWhite,
    },
    ["&:hover"]: {
      background: props.disabled ? "transparent" : props.theme.redHover,
    },
  }))
);

export const GreenButton = withTheme(
  styled(Button)<ButtonProps>({}, props => ({
    background: props.disabled ? "transparent" : props.theme.greenLight,

    border: `1px solid ${
      props.disabled ? props.theme.greenLight : "transparent"
    }`,
    color: props.disabled ? props.theme.greenLight : props.theme.green,
    ["&:active"]: {
      background: props.theme.greenHover,
      color: props.theme.white,
    },
    ["&:hover"]: {
      background: props.disabled ? "transparent" : props.theme.greenHover,
    },
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
    color: props.disabled ? props.theme.textSubtile : props.theme.primary,
  }))
);

export const AcceptButton = withTheme(({ margin, theme, onClick }: any) => (
  <PrimaryButton
    onClick={onClick}
    color={theme.white}
    margin={margin}
    hasShadow
    fontSize="1rem"
    isRound
  >
    <AcceptIcon />
  </PrimaryButton>
));

export const CancelButton = withTheme(({ theme, margin, onClick }: any) => (
  <Button
    onClick={onClick}
    margin={margin}
    color={theme.white}
    hasShadow
    background={theme.red}
    fontSize="1rem"
    transform="rotate(45deg)"
    isRound
  >
    <CancelIcon />
  </Button>
));
