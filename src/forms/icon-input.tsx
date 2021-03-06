import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import { Flex } from "../layout";

interface Props {
  inactiveWidth?: string;
  activeWidth?: string;
}

export const IconInput = withTheme(
  styled(Flex)<Props>({}, ({ activeWidth, inactiveWidth, theme }) => ({
    input: {
      background: "transparent",
      borderBottom: `solid 1px transparent`,
      color: theme.primary,
      padding: "0 0 0.2rem 0.2rem",
      transition: "100ms ease-in-out",
      width: inactiveWidth,
    },
    ["input:focus"]: {
      "&+svg": {
        fill: theme.primary + "!important",
      },
      borderBottom: `solid 1px ${theme.primary}`,
      placeholder: theme.primary,
      width: activeWidth,
    },
    ["input::placeholder"]: {
      color: theme.textSubtile,
    },
    position: "relative",
    svg: {
      fill: theme.textSubtile + "!important",
      position: "absolute",
      right: 0,
    },
  }))
);
