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
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    gridAutoRows: props.rows
      ? `minmax(${props.rows}, auto)`
      : "minmax(10rem, auto)",
    gridGap: props.gridGap || "1rem",
    gridTemplateColumns: props.columns
      ? `repeat(auto-fill, minmax(${props.columns}, 1fr))`
      : "repeat(auto-fill, minmax(10rem, 1fr))",
    justifyContent: props.justifyContent,
    justifyItems: props.justifyItems,
    justifySelf: props.justifySelf,
    margin: props.margin || "1rem"
  })
);

interface SplitLayoutProps {
  margin?: string;
  gridGap?: string;
}
export const SplitLayout = styled("div")<SplitLayoutProps>(
  {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "1fr",
    margin: "1rem"
  },
  props => ({
    gridGap: props.gridGap || "1rem",
    margin: props.margin || "1rem",
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
  alignItems?: GridContentPlacement;
  alignSelf?: GridContentPlacement;
  justifyContent?: GridPlacement;
  justifyItems?: GridContentPlacement;
  justifySelf?: GridContentPlacement;
}

interface ResponsiveGridProps extends GridPlacementProps {
  columns?: string;
  gridGap?: string;
  laptopColumns?: string;
  margin?: string;
  rows?: string;
  tabletColumns?: string;
}

export const ResponsiveGrid = styled("div")<ResponsiveGridProps>(
  { display: "grid" },
  props => ({
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    gridGap: props.gridGap || "1rem",
    gridTemplateColumns: props.columns,
    gridTemplateRows: props.rows,
    justifyContent: props.justifyContent,
    justifyItems: props.justifyItems,
    justifySelf: props.justifySelf,
    margin: props.margin || "1rem",
    [(props.theme as Theme).breakPoints.tablet]: {
      gridTemplateColumns: props.tabletColumns
    },
    [(props.theme as Theme).breakPoints.laptop]: {
      gridTemplateColumns: props.laptopColumns
    }
  })
);
