// @flow

import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "@boot/configureStore";
import getTheme from "@components";
import variables from "@variables/platform";
import Router from "@router";

export interface Props {}

export interface State {
  store: Object;
  isLoading: boolean;
}

export default class Kernal extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <Router />
        </Provider>
      </StyleProvider>
    );
  }
}
