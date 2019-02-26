import { withTheme } from "emotion-theming";
import * as React from "react";
import { Icon } from "../components";
import { AcceptButton } from '../forms/button';

export function AcceptIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="13"
      viewBox="0 0 19 13"
    >
      <polygon points="7 10.271 7.212 9.559 16.724 0 18.224 1.5 7 12.71 0 5.771 1.5 4.271 6.788 9.559" />
    </svg>
  );
}

export const GreenAcceptIcon = withTheme(props => (<Icon color={props.theme.green}><AcceptButton/></Icon>))
