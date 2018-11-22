import * as React from "react";
import { WindowSize } from "../effects/window-size";

export interface HideByBreakPointProps {
  min: number;
  max: number;
  children: React.ReactNode;
}

export function HideByBreakPoint({
  children,
  min = 0,
  max = Infinity
}: HideByBreakPointProps): JSX.Element {
  return (
    <WindowSize render={width => width >= min && width <= max && children} />
  );
}
