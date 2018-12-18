import styled from "@emotion/styled";
import { theme } from "./theme";

interface LoadingIndicatorProps {
  started: boolean;
}
export const LoadingIndicator = styled("div")<LoadingIndicatorProps>(
  {
    backgroundColor: theme.themedBlack,
    borderRadius: "3px",
    height: "2px",
    left: "-1%",
    position: "fixed",
    top: 0,
    zIndex: 1
  },
  props => ({
    transition: props.started
      ? "width 3000ms ease-out, opacity 200ms linear"
      : "none",
    width: props.started ? "102%" : "1%"
  })
);
