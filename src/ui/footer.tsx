import styled from "@emotion/styled";
import { theme } from "./theme";

export const FixedFooter = styled("footer")({
  background: theme.primary,
  bottom: 0,
  position: "fixed",
  width: "100%",
});
