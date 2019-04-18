import React, { Component } from "react";
import {
  ThemeProvider,
  light,
  dark,
  HeaderNavBar,
  ThemeSwitcher,
  Block,
  SearchPlus,
  SearchMinus,
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
        <Block margin="2rem">
          hi
          <SearchPlus />
          <SearchMinus />
        </Block>
      </ThemeProvider>
    );
  }
}

export default App;
