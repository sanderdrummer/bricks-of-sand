import styled from "react-emotion";
import { theme } from "../ui";

export const SearchInput = styled("div")(
  {
    input: {
      border: `solid 1px ${theme.white}`
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
