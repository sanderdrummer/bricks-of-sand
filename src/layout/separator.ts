import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import { Block } from "./block";

export const Separator = withTheme(
  styled(Block)({}, props => ({
    borderTop: `solid 1px ${props.theme.border}`,
  }))
);
