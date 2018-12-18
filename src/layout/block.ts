import styled from "@emotion/styled";

export interface BlockProps {
  height?: string;
  margin?: string;
  padding?: string;
  width?: string;
}
export const Block = styled("div")<BlockProps>({}, props => ({
  height: props.height,
  margin: props.margin,
  padding: props.padding,
  width: props.width
}));

export const Relative = styled("div")({
  position: "relative"
});

export interface FixedContainerProps {
  top?: number;
  bottom?: number;
}
export const FixedContainer = styled("div")<FixedContainerProps>(
  {
    position: "fixed",
    width: "100%",
    zIndex: 10
  },
  props => ({
    bottom: props.bottom,
    top: props.top
  })
);
