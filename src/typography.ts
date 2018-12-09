import { withTheme } from "emotion-theming";
import styled from "react-emotion";

export const CenterText = styled("span")({
  textAlign: "center"
});

interface AlertTextProps {
  value: number;
}
export const AlertText = withTheme(
  styled("span")<AlertTextProps>({}, props => ({
    color: props.value < 0 ? props.theme.red : props.theme.greenText
  }))
);

interface LineThroughProps {
  lineThrough?: boolean;
}

export const LineThrough = styled("div")<LineThroughProps>({}, props => ({
  textDecoration: props.lineThrough ? "line-through" : "none"
}));

interface TextAlignProps {
  textAlign: any;
}
export const TextAlign = styled("div")<TextAlignProps>({}, props => ({
  textAlign: props.textAlign
}));

export const Ellipsis = styled("div")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
