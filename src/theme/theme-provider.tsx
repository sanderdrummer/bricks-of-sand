import {
  ThemeProvider as EmotionsThemeProvider,
  withTheme
} from "emotion-theming";
import * as React from "react";
import styled from "react-emotion";
import { Theme, theme } from "../ui";
import { DayModeIcon } from "./dayMode";
import { NightModeIcon } from "./nightMode";

export const light: Theme = {
  ...theme,
  border: "#E5E6E5",
  componentBackgroundDark: "#fff",
  componentBackgroundLight: "#fff",
  green: "#24C841",
  mainBackground: "#f2f3f2",
  primary: "#000",
  red: "#E25766",
  text: "#343434",
  textSubtile: "#BABABA"
};

export const dark: Theme = {
  ...theme,
  border: "#f3f4f3",
  componentBackgroundDark: "#1d2832",
  componentBackgroundLight: "#2E3D4D",
  green: "#24C841",
  mainBackground: "#25333F",
  primary: "#fff",
  red: "#E25766",
  text: "#fdfdfd",
  textSubtile: "#5B687B"
};

export const SelectedThemeContext = React.createContext({
  selectedTheme: "light",
  // tslint:disable-next-line:no-empty
  updateTheme: () => {}
});

const MainWrapper = withTheme(
  styled("div")(props => ({
    background: props.theme.mainBackground,
    color: props.theme.text,
    minHeight: "100vh"
  }))
);

export interface Props {
  themes: {
    light: Theme;
    dark: Theme;
  };
}

export interface State {
  selectedTheme: string;
}

export class ThemeProvider extends React.Component<Props, State> {
  public state = { selectedTheme: "light" };

  public updateTheme = () => {
    const selectedTheme =
      this.state.selectedTheme === "light" ? "dark" : "light";
    this.setState({ selectedTheme });
  };

  public render() {
    return (
      <SelectedThemeContext.Provider
        value={{
          selectedTheme: this.state.selectedTheme,
          updateTheme: this.updateTheme
        }}
      >
        <EmotionsThemeProvider
          theme={this.props.themes[this.state.selectedTheme]}
        >
          <MainWrapper>{this.props.children}</MainWrapper>
        </EmotionsThemeProvider>
      </SelectedThemeContext.Provider>
    );
  }
}

export const IconWrapper = withTheme(
  styled("div")({}, props => ({
    svg: { fill: props.theme.primary }
  }))
);

export const ThemeSwitcher = () => {
  return (
    <SelectedThemeContext.Consumer>
      {({ updateTheme, selectedTheme }) => (
        <IconWrapper onClick={updateTheme}>
          {selectedTheme === "light" ? <DayModeIcon /> : <NightModeIcon />}
        </IconWrapper>
      )}
    </SelectedThemeContext.Consumer>
  );
};
