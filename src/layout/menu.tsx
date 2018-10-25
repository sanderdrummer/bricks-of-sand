import * as React from "react";
import styled from "react-emotion";

export interface Props {
  label: React.ReactNode;
  id: string;
}

const NavContainer = styled("div")({}, props => ({
  ["&>input"]: {
    display: "none"
  },
  ["input:checked ~ nav"]: {
    background: props.theme.white,
    maxHeight: "100vh",
    zIndex: 100
  },
  nav: {
    maxHeight: "0",
    overflow: "hidden",
    position: "absolute"
  },
  width: "inherit"
}));

export const Menu: React.SFC<Props> = ({ children, label, id }) => {
  return (
    <NavContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="checkbox" />

      <nav>{children}</nav>
    </NavContainer>
  );
};
