import * as React from "react";
import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";
import { AcceptIcon, CancelIcon } from "../icons";

export interface ButtonProps {
  color?: string;
  background?: string;
  disabled?: boolean;
  type?: string;
  margin?: string;
  isRound?: boolean;
  fontSize?: string;
  hasShadow?: boolean;
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
        boxShadow: props.hasShadow ? theme.shadows.level2 : "none",
        background: props.disabled ? theme.white : props.background,
        borderRadius: props.isRound ? "100%" : props.theme.borderRadius,
        color: props.disabled
          ? props.theme.textSubtile
          : props.color || props.theme.white,
        svg: {
          fill: props.disabled
            ? props.theme.textSubtile
            : props.color || props.theme.white,
          maxWidth: props.fontSize,
          maxHeight: props.fontSize
        }
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
    color: props.disabled ? props.theme.text : props.theme.white
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
      color: props.theme.white
    },
    ["&:hover"]: {
      background: props.disabled ? "transparent" : props.theme.redHover
    }
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
      color: props.theme.white
    },
    ["&:hover"]: {
      background: props.disabled ? "transparent" : props.theme.greenHover
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

export const AcceptButton = () => (
  <PrimaryButton hasShadow fontSize="0.8rem" isRound>
    <AcceptIcon />
  </PrimaryButton>
);

export const CancelButton = withTheme((props: any) => (
  <Button hasShadow background={props.theme.red} fontSize="0.8rem" isRound>
    <CancelIcon />
  </Button>
));
