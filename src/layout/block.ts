import styled from "react-emotion";

export interface BlockProps {
  height: string;
  margin: string;
  padding: string;
  width: string;
}
export const Block = styled("div")<BlockProps>({}, props => ({
  height: props.height,
  margin: props.margin,
  padding: props.padding,
  width: props.width
}));
