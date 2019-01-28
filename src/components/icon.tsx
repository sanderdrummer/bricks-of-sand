import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import * as React from "react";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  color: "redText" | "greenText" | "";
}

const IconWrapper = withTheme(
  styled("span")<Props>(
    {
      display: "inline-flex",
    },
    props => ({
      svg: {
        fill: props.theme[props.color || "text"],
        height: props.height,
        width: props.width,
      },
      width: props.width,
    })
  )
);

export const Icon: React.FC<Props> = props => (
  <IconWrapper {...props}>{props.children}</IconWrapper>
);
