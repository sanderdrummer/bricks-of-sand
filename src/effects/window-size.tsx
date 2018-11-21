import * as React from "react";

const hasWindow = typeof window !== "undefined";

interface State {
  width: number;
}

interface Props {
  render(width: number): React.ReactNode;
}

export class WindowSize extends React.Component<Props, State> {
  public state = { width: hasWindow ? window.innerWidth : 0 };

  public resize = () => {
    this.setState({ width: window.innerWidth });
  };

  public componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  public render(): React.ReactNode {
    return this.props.render(this.state.width);
  }
}
