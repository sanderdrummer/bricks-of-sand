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
  AutoComplete,
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
          <Block>
            <AutoCompleteExample />
          </Block>
        </Block>
      </ThemeProvider>
    );
  }
}

const AutoCompleteExample = () => {
  const items = [{ name: "test" }, { name: "peter" }, { name: "schmidt" }];

  return (
    <div>
      <AutoComplete
        onSelect={selection => console.log(selection)}
        items={items}
      />
      <AutoComplete
        clearOnSelect
        onSelect={selection => console.log(selection)}
        items={items}
      />
    </div>
  );
};

export default App;
