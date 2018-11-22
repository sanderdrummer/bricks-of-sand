import { withTheme } from "emotion-theming";
import styled from "react-emotion";
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
      padding: "0 0 0.2rem 0.2rem",
      transition: "100ms ease-in-out",
      width: inactiveWidth
    },
    ["input:focus"]: {
      borderBottom: `solid 1px ${theme.primary}`,
      placeholder: theme.primary,
      width: activeWidth
    },
    position: "relative",
    svg: {
      fill: theme.primary,
      position: "absolute",
      right: 0
    }
  }))
);
