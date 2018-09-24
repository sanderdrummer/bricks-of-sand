import styled from "react-emotion";
import { theme } from "./theme";

interface LoadingIndicatorProps {
  started: boolean;
}
export const LoadingIndicator = styled("div")<LoadingIndicatorProps>(
  {
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: "-1%",
    height: "2px",
    backgroundColor: theme.white,
    borderRadius: "3px"
  },
  props => ({
    width: props.started ? "102%" : "1%",
    transition: props.started
      ? "width 3000ms ease-out, opacity 200ms linear"
      : "none"
  })
);
