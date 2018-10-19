import * as React from "react";
import styled from "react-emotion";

const NavBar = styled("div")(
  {
    height: "4rem",
    nav: {
      alignItems: "center",
      display: "flex",
      height: "inherit",
      justifyContent: "space-between",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 200
    }
  },
  props => ({
    nav: {
      a: {
        color: props.theme.textSubtile,
        ["&.active"]: {
          color: props.theme.primary
        }
      },
      background: props.theme.white
    }
  })
);

export const HeaderNavBar: React.SFC = ({ children }) => {
  return (
    <NavBar>
      <nav>{children}</nav>
    </NavBar>
  );
};
