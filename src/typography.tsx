import * as React from "react";

import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

export const CenterText = styled("span")({
  textAlign: "center",
});

interface AlertTextProps {
  value: number;
}
export const AlertText = withTheme(
  styled("span")<AlertTextProps>({}, props => ({
    color: props.value < 0 ? props.theme.red : props.theme.greenText,
  }))
);

interface LineThroughProps {
  lineThrough?: boolean;
}

export const LineThrough = styled("div")<LineThroughProps>({}, props => ({
  textDecoration: props.lineThrough ? "line-through" : "none",
}));

interface TextAlignProps {
  textAlign: any;
}
export const TextAlign = styled("div")<TextAlignProps>({}, props => ({
  textAlign: props.textAlign,
}));

const EllipsisWrapper = styled("div")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const Ellipsis: React.FunctionComponent = ({ children }) => {
  const title = typeof children === "string" ? children : "";
  return <EllipsisWrapper title={title}>{children}</EllipsisWrapper>;
};
