import React, { Component } from "react";
import {
  ThemeProvider,
  light,
  dark,
  HeaderNavBar,
  ThemeSwitcher,
  Block,
} from "bricks-of-sand";
class App extends Component {
  render() {
    return (
      <ThemeProvider themes={{ light, dark }}>
        <HeaderNavBar>
          <Block margin="1rem">
            <ThemeSwitcher height="1rem" />
          </Block>
          <Block margin="1rem">hello there</Block>
        </HeaderNavBar>
      </ThemeProvider>
    );
  }
}

export default App;
