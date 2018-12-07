import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import { Block } from ".";

export const Separator = withTheme(
  styled(Block)({}, props => ({
    borderTop: `solid 1px ${props.theme.border}`
  }))
);
