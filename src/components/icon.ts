import styled from "@emotion/styled";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export const Icon = styled("img")<Props>(
  {
    display: "inline-flex"
  },
  props => ({
    height: props.height,
    margin: props.margin,
    width: props.width
  })
);
