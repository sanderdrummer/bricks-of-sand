/**
 * @class ExampleComponent
 */

import * as React from "react";

export * from "./ui";
export * from "./components";
export * from "./layout";
export * from "./forms";

export { injectGlobal } from "react-emotion";
export { ThemeProvider } from "emotion-theming";

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div>Example Component: {text}</div>;
  }
}
