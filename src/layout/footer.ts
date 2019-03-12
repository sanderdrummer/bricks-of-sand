import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

export const Footer = withTheme(
  styled("footer")({}, ({ theme }) => ({
    [theme.breakPoints.mobileRange]: {
      display: "block",
      textAlign: "center",
    },
    [theme.breakPoints.tablet]: {
      display: "flex",
      justifyContent: "space-between",
    },
    a: {
      color: theme.textSubtile,
    },
    color: theme.textSubtile,
    fontSize: "0.8rem",
    padding: "1rem",
    svg: {
      fill: theme.textSubtile,
    },
  }))
);
