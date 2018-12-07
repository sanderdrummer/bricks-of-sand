import * as styledComponents from "styled-components";
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "./ui";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
