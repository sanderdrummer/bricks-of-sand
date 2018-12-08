import styled from "react-emotion";
import { theme } from "./theme";

export const Header = styled("header")({
  a: {
    color: `${theme.themedWhite}`
  },
  background: `${theme.primary}`,
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  color: `${theme.themedWhite}`,
  padding: "1rem",
  textAlign: "center"
});
