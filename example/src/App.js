import React, { Component } from "react";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import ExampleComponent, {
  injectGlobal,
  Card,
  theme,
  ThemeProvider,
  resetCss,
  baseCss
} from "bricks-of-sand";

import { Home } from "bricks-of-sand/example/src/Home";
import { Layout } from "bricks-of-sand/example/src/Layout";
import { Form } from "bricks-of-sand/example/src/Form";

injectGlobal(resetCss);
injectGlobal(baseCss);

console.log(theme);

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const AppRouter = () => (
  <div>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/layout">Layout</NavLink>
    <NavLink to="/form">Form</NavLink>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/layout" component={Layout} />
      <Route path="/form" component={Form} />
      <Redirect from="/" to="/home" />
    </Switch>
  </div>
);
