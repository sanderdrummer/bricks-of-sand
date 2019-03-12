/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";

import styled from "@emotion/styled";
import {
  ThemeProvider as EmotionsThemeProvider,
  withTheme,
} from "emotion-theming";
import * as React from "react";
import { TextButton } from "../forms/button";
import { resetCss, Theme, theme } from "../ui";
import { DayModeIcon } from "./dayMode";
import { NightModeIcon } from "./nightMode";

// tslint:disable:object-literal-sort-keys
export const light: Theme = {
  ...theme,
  border: "#E5E6E5",
  componentBackgroundDark: "#fff",
  componentBackgroundLight: "#fff",
  green: "#63C658",
  greenHover: "#B3E5BB",
  greenLight: "#CFE9D1",
  greenText: "#63C658",
  mainBackground: "#f2f3f2",
  primary: "#28333D",
  red: "#D16069",
  redHover: "#f3b4bb",
  redLight: "#ffdce0",
  redText: "#D16069",
  text: "#343434",
  textSubtile: "#bababa",
};

export const dark: Theme = {
  ...theme,
  border: "#f3f4f3",
  componentBackgroundDark: "#1d2832",
  componentBackgroundLight: "#2E3D4D",
  green: "#C2FFCD",
  greenHover: "#1E4B3D",
  greenLight: "#2B584A",
  greenText: "#C2FFCD",
  hover: "#47525A",
  mainBackground: "#25333F",
  primary: "#fff",
  red: "#FFBAC2",
  redHover: "#443444",
  redLight: "#514151",
  redText: "#FFBAC2",
  text: "#fdfdfd",
  textSubtile: "#59687c",
  themedWhite: "#1d2832",
  buttonCancelFont: "#ffedf0",
  buttonCancelBackground: "#f54963",
  buttonAcceptFont: "#353535",
  buttonAcceptBackground: "#f2f3f2",
  buttonGreenBackground: "#155949",
  buttonGreenFont: "#00cc1d",
  buttonRedBackground: "#544052",
  buttonRedFont: "#f54963",
  buttonDefaultBackground: "#2a3e4f",
  buttonDefaultFont: "#eaebed",
  defaultFillColor: "#e9ebec",
};
export const SelectedThemeContext = React.createContext({
  selectedTheme: "light",
  // tslint:disable-next-line:no-empty
  updateTheme: () => {},
});

const THEME_KEY = "SELECTED_THEME";
const getTheme = (): string => localStorage.getItem(THEME_KEY) || "light";
const setTheme = (theme: string) => localStorage.setItem(THEME_KEY, theme);

const MainWrapper = withTheme(
  styled("div")(props => ({
    "*": {
      outlineColor: props.theme.primary,
    },
    a: {
      color: props.theme.primary,
      textDecoration: "none",
    },
    background: props.theme.mainBackground,
    color: props.theme.text,
    minHeight: "100vh",
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
  public state = { selectedTheme: getTheme() };

  public updateTheme = () => {
    const selectedTheme =
      this.state.selectedTheme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
    this.setState({ selectedTheme });
  };

  public render() {
    return (
      <SelectedThemeContext.Provider
        value={{
          selectedTheme: this.state.selectedTheme,
          updateTheme: this.updateTheme,
        }}
      >
        <EmotionsThemeProvider
          theme={this.props.themes[this.state.selectedTheme]}
        >
          <MainWrapper>{this.props.children}</MainWrapper>
        </EmotionsThemeProvider>
        <Global styles={css(resetCss)} />
      </SelectedThemeContext.Provider>
    );
  }
}

export const IconWrapper = withTheme(
  styled(TextButton)<{ height: string }>({}, props => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    svg: { fill: props.theme.defaultFillColor, height: props.height },
  }))
);

export const ThemeSwitcher = ({ height }: { height: string }) => {
  return (
    <SelectedThemeContext.Consumer>
      {({ updateTheme, selectedTheme }) => (
        <IconWrapper height={height} onClick={updateTheme}>
          {selectedTheme === "light" ? <DayModeIcon /> : <NightModeIcon />}
        </IconWrapper>
      )}
    </SelectedThemeContext.Consumer>
  );
};
