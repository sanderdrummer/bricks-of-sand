import styled from "react-emotion";
import { theme } from "./theme";

export const FixedFooter = styled("footer")({
  position: "fixed",
  width: "100%",
  background: theme.primary,
  bottom: 0
});
