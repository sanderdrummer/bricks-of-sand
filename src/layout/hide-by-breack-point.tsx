import * as React from "react";
import { WindowSize } from "../effects/window-size";

export interface HideByBreakPointProps {
  breakPoint: number;
  children: React.ReactNode;
}

export function HideByBreakPoint({
  breakPoint,
  children
}: HideByBreakPointProps): JSX.Element {
  return <WindowSize render={width => width >= breakPoint && children} />;
}
