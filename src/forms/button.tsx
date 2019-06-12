import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import * as React from "react";
import { AcceptIcon, CancelIcon } from "../icons";
import { theme } from "../ui/theme";
import { ButtonProps } from "./button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
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

      const disabledStyles = props.disabled
        ? {
            background: "transparent",
            border: `2px solid ${props.theme.buttonDisabled}`,
            color: props.theme.buttonDisabled,
            cursor: "not-allowed",
            svg: {
              fill: props.theme.buttonDisabled,
              maxHeight: props.fontSize || "1rem",
              maxWidth: props.fontSize || "1rem",
              transform: props.transform,
            },
          }
        : {
            "&:hover": {
              background:
                props.background || props.theme.buttonDefaultBackground,
            },
            background: props.background || props.theme.buttonDefaultBackground,
            color: props.color || props.theme.buttonDefaultFont,
            cursor: "pointer",
            svg: {
              fill: props.color || props.theme.buttonDefaultFont,
              maxHeight: props.fontSize || "1rem",
              maxWidth: props.fontSize || "1rem",
              transform: props.transform,
            },
          };

      return {
        ...isRoundStyles,
        ...disabledStyles,
        borderRadius: props.isRound ? "100%" : props.theme.borderRadius,
        boxShadow: props.hasShadow ? theme.shadows.level2 : "none",
        margin: props.margin,
        outlineColor: props.theme.buttonDefaultFont,
        padding: props.padding || "0.5rem",
      };
    }
  )
);

Button.defaultProps = {
  type: "button",
};

export const PrimaryButton = withTheme(
  styled(Button)<ButtonProps>({}, props => {
    if (props.disabled) {
      return {};
    }
    return {
      "&:hover": {
        background: props.theme.primary,
      },
      background: props.theme.primary,
      color: props.theme.themedWhite,
      svg: {
        fill: props.theme.themedWhite,
      },
    };
  })
);

export const RedButton = withTheme(
  styled(Button)<ButtonProps>({}, props => {
    if (props.disabled) {
      return {};
    }
    return {
      background: props.theme.buttonRedBackground,
      border: `solid 1px ${props.theme.buttonRedBackground}`,
      color: props.theme.buttonRedFont,
      ["&:active"]: {
        background: props.theme.buttonRedBackground,
        color: props.theme.buttonRedFont,
      },
      ["&:hover"]: {
        background: props.theme.buttonRedBackground,
      },
    };
  })
);

export const GreenButton = withTheme(
  styled(Button)<ButtonProps>({}, props => {
    if (props.disabled) {
      return {};
    }
    return {
      background: props.theme.buttonGreenBackground,
      border: `solid 1px ${props.theme.buttonGreenBackground}`,
      color: props.theme.buttonGreenFont,
      ["&:active"]: {
        background: props.theme.buttonGreenBackground,
        color: props.theme.white,
      },
      ["&:hover"]: {
        background: props.theme.buttonGreenBackground,
      },
    };
  })
);

export const OutlineButton = withTheme(
  styled(Button)<ButtonProps>({}, props => {
    if (props.disabled) {
      return {};
    }
    return {
      background: props.theme.white,
      border: `solid 1px ${
        props.disabled
          ? props.theme.textSubtile
          : props.background || props.theme.primary
      }`,
      color: props.disabled ? props.theme.textSubtile : props.theme.primary,
    };
  })
);

export const AcceptButton = withTheme(
  ({ theme, margin, onClick, disabled }: any) => (
    <Button
      disabled={disabled}
      onClick={onClick}
      margin={margin}
      color={theme.buttonAcceptFont}
      hasShadow
      background={theme.buttonAcceptBackground}
      fontSize="1rem"
      isRound
    >
      <AcceptIcon />
    </Button>
  )
);

export const CancelButton = withTheme(
  ({ theme, margin, onClick, disabled }: any) => (
    <Button
      disabled={disabled}
      onClick={onClick}
      margin={margin}
      color={theme.buttonCancelFont}
      hasShadow
      background={theme.buttonCancelBackground}
      fontSize="1rem"
      transform="rotate(45deg)"
      isRound
    >
      <CancelIcon />
    </Button>
  )
);

// export const PlusButton = { disabled };

export const TextButton = withTheme(
  styled("button")<{ disabled?: boolean }>(
    {
      "&:disabled": {
        cursor: "not-allowed",
      },
      background: "none",
      border: "2px solid transparent",
      cursor: "pointer",
      margin: 0,
      padding: 0,
    },
    ({ theme, disabled }) => ({
      color: disabled ? theme.buttonDisabled : theme.textButtonFont,
    })
  )
);
