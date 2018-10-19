import styled from "react-emotion";

interface Props {
  width: string;
  height: string;
}

export const Icon = styled("img")<Props>(
  {
    display: "inline-flex"
  },
  props => ({
    height: props.height,
    width: props.width
  })
);
