import styled from "react-emotion";
import { Block } from "../layout/block";
import { shadows } from "../ui/theme";

export const MaterialInput = styled(Block)(
  {
    input: {
      border: "none",
      boxShadow: shadows.level5,
      padding: "0.8rem 0.5rem"
    }
  },
  props => ({
    background: props.theme.componentBackgroundDark
  })
);
