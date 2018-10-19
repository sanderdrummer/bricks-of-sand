import styled from "react-emotion";
import { theme } from "../ui";

export const SearchInput = styled("div")(
  {
    input: {
      border: "none"
    },
    ["input:focus"]: {
      borderBottom: `solid 1px ${theme.primary}`
    }
  },
  props => ({
    color: props.theme.primary,
    ["input:focus"]: {
      borderBottom: `solid 1px ${theme.primary}`
    }
  })
);
