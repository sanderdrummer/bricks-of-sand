import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

interface TabProps {
  margin?: string;
  fontSize?: string;
  className?: string;
  onClick?(): void;
}

export const Tab = (element: any) =>
  withTheme(
    styled(element)<TabProps>(
      {
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        padding: "0.5rem",
        textTransform: "uppercase",
      },
      ({ theme, fontSize, margin }) => ({
        color: theme.textHighlight + "!important",
        fontSize: fontSize || "0.8rem",
        margin,
        svg: {
          fill: theme.textHighlight,
          maxHeight: fontSize || "0.8rem",
          maxWidth: fontSize || "0.8rem",
        },
        ["&.active"]: {
          background: theme.componentBackgroundLight,
          borderRadius: theme.borderRadius,
        },
        ["&:hover"]: {
          background: theme.componentBackgroundLight,
          borderRadius: theme.borderRadius,
        },
      })
    )
  );
