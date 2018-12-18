import styled from "@emotion/styled";
import { theme } from "./theme";

export const FormField = styled("div")({
  marginBottom: "0.5rem"
});

export interface FixedContainerProps {
  top?: number;
}
export const FixedContainer = styled("div")<FixedContainerProps>(
  {
    position: "fixed",
    width: "100%",
    zIndex: 10
  },
  props => ({
    top: props.top
  })
);

export const Section = styled("section")({
  padding: "1rem"
});

interface RowProps {
  alignContent?: string;
  justifyContent?: string;
}
export const Row = styled("div")<RowProps>(
  {
    display: "flex",
    width: "100%"
  },
  props => ({
    alignContent: props.alignContent,
    justifyContent: props.justifyContent
  })
);

export const CenterSection = styled("section")({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: "0"
});

interface ColumnProps {
  margin?: string;
  padding?: string;
  flex?: string;
}
export const Column = styled("div")<ColumnProps>({}, props => ({
  flex: props.flex,
  margin: props.margin,
  padding: props.padding
}));

export const FullWidth = styled("div")({
  width: "100%"
});

export const ListItem = styled("div")({
  borderBottom: `solid 1px ${theme.border}`,
  padding: "1rem 0"
});

export interface FixedContainerProps {
  top?: number;
  bottom?: number;
}
