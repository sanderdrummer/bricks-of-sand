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
  Icon,
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
          <Icon>
            <SearchMinus />
          </Icon>
        </Block>
      </ThemeProvider>
    );
  }
}

export default App;
