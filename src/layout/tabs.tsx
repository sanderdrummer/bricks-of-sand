import { withTheme } from "emotion-theming";
import styled from "react-emotion";

interface TabProps {
  margin?: string;
  fontSize?: string;
}

export const Tab = (element: any) =>
  withTheme(
    styled(element)<TabProps>(
      {
        alignItems: "center",
        display: "inline-flex",
        padding: "0.5rem",
        textTransform: "uppercase"
      },
      ({ theme, fontSize, margin }) => ({
        color: theme.textHighlight + "!important",
        fontSize: fontSize || "0.8rem",
        margin: margin || "0.5rem",
        svg: {
          fill: theme.textHighlight,
          maxHeight: fontSize || "0.8rem",
          maxWidth: fontSize || "0.8rem"
        },
        ["&.active"]: {
          background: theme.componentBackgroundLight,
          borderRadius: theme.borderRadius
        }
      })
    )
  );
