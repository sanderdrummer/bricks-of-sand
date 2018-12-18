import styled from "@emotion/styled";
import { theme } from "../ui";

export const SearchInput = styled("div")(
  {
    input: {
      border: `solid 1px ${theme.themedWhite}`
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
