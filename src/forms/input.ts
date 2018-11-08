import styled from "react-emotion";

export const Input = styled("input")(props => ({
  background: props.theme.componentBackgroundDark,
  border: "solid 1px transparent",
  borderRadius: props.theme.borderRadius,
  color: props.theme.text,
  padding: "0.5rem",
  width: "100%",
  ["&:focus"]: {
    boxShadow: props.theme.inputShadow
  }
}));
