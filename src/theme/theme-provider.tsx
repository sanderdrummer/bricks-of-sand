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
  textSubtile: "#28333D"
};

export const dark: Theme = {
  ...theme,
  border: "#f3f4f3",
  componentBackgroundDark: "#1d2832",
  componentBackgroundLight: "#2E3D4D",
  green: "#24C841",
  mainBackground: "#25333F",
  primary: "#fff",
  text: "#fdfdfd",
  textSubtile: "#5B687B",
  themedWhite: "#1d2832"
};
export const SelectedThemeContext = React.createContext({
  selectedTheme: "light",
  // tslint:disable-next-line:no-empty
  updateTheme: () => {}
});

const MainWrapper = withTheme(
  styled("div")(props => ({
    a: {
      color: props.theme.primary,
      textDecoration: "none"
    },
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
  styled("div")<{ height: string }>({}, props => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    svg: { fill: props.theme.primary, height: props.height }
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
