import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

export const ListItem = withTheme(
  styled("div")({}, props => ({
    borderTop: `solid 1px ${props.theme.border}`,
    padding: "1rem 0"
  }))
);
