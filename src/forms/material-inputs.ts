import styled from "react-emotion";
import { shadows } from "../ui/theme";

export const MaterialInput = styled("div")({
  background: "white",
  input: {
    border: "none",
    boxShadow: shadows.level5,
    padding: "0.8rem 0.5rem"
  },
  margin: "3rem"
});
