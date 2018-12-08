import { withTheme } from "emotion-theming";
import styled from "react-emotion";

export const Footer = withTheme(
  styled("footer")({}, ({ theme }) => ({
    [theme.breakPoints.mobileRange]: {
      display: "block",
      textAlign: "center"
    },
    [theme.breakPoints.tablet]: {
      display: "flex",
      justifyContent: "space-between"
    },
    a: {
      color: theme.textLight
    },
    color: theme.textLight,
    fontSize: "0.8rem",
    padding: "1rem",
    svg: {
      fill: theme.textLight
    }
  }))
);
