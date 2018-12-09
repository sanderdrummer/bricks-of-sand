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
        color: props.theme.textLight + "!important",
        ["&.active"]: {
          color: props.theme.primary + "!important"
        }
      },
      background: props.theme.themedWhite,
      svg: {
        fill: props.theme.primary
      }
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
