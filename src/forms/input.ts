import styled from "react-emotion";

export const Input = styled("input")(props => ({
  background: props.theme.componentBackgroundDark,
  border: "solid 1px transparent",
  color: props.theme.text,
  ["&:active"]: {
    borderBottom: `solid 1px ${props.theme.primary}`
  }
}));
