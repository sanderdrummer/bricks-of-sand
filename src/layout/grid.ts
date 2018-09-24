import styled from "react-emotion";
import { Theme } from "../ui";

interface AutoGridProps extends GridPlacementProps {
  columns?: string;
  rows?: string;
  margin?: string;
  gridGap?: string;
}

export const AutoGrid = styled("div")<AutoGridProps>(
  {
    display: "grid"
  },
  props => ({
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
    justifyItems: props.justifyItems,
    justifySelf: props.justifySelf,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    margin: props.margin || "1rem",
    gridGap: props.gridGap || "1rem",
    gridTemplateColumns: props.columns
      ? `repeat(auto-fill, minmax(${props.columns}, 1fr))`
      : "repeat(auto-fill, minmax(10rem, 1fr))",
    gridAutoRows: props.rows
      ? `minmax(${props.rows}, auto)`
      : "minmax(10rem, auto)"
  })
);

interface SplitLayoutProps {
  margin?: string;
  gridGap?: string;
}
export const SplitLayout = styled("div")<SplitLayoutProps>(
  {
    display: "grid",
    gridTemplateColumns: "1fr",
    margin: "1rem",
    gridGap: "1rem"
  },
  props => ({
    margin: props.margin || "1rem",
    gridGap: props.gridGap || "1rem",
    [(props.theme as Theme).breakPoints.tablet]: {
      gridTemplateColumns: "1fr 1fr"
    }
  })
);

type GridContentPlacement = "start" | "end" | "center" | "stretch";
type GridPlacement =
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";

interface GridPlacementProps {
  alignContent?: GridPlacement;
  justifyContent?: GridPlacement;
  justifyItems?: GridContentPlacement;
  justifySelf?: GridContentPlacement;
  alignItems?: GridContentPlacement;
  alignSelf?: GridContentPlacement;
}

interface ResponsiveGridProps extends GridPlacementProps {
  margin?: string;
  gridGap?: string;
  columns?: string;
  tabletColumns?: string;
  laptopColumns?: string;
  rows?: string;
}

export const ResponsiveGrid = styled("div")<ResponsiveGridProps>(
  { display: "grid" },
  props => ({
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
    justifyItems: props.justifyItems,
    justifySelf: props.justifySelf,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    gridTemplateRows: props.rows,
    margin: props.margin || "1rem",
    gridGap: props.gridGap || "1rem",
    [(props.theme as Theme).breakPoints.tablet]: {
      gridTemplateColumns: props.tabletColumns
    },
    [(props.theme as Theme).breakPoints.laptop]: {
      gridTemplateColumns: props.laptopColumns
    }
  })
);
