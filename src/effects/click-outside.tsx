import * as React from "react";

interface Props {
  onClick(): void;
}

export class ClickOutside extends React.Component<Props> {
  public node: HTMLDivElement | null;

  public componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  public componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  public handleClick = (e: any) => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }

    this.props.onClick();
  };

  public render(): JSX.Element {
    return <div ref={node => (this.node = node)}>{this.props.children}</div>;
  }
}
