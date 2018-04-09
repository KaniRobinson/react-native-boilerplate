import React, { Component } from "react";
import { Root } from "native-base";
import StackNavigation from "@navigation/stackNavigation";

export default class Router extends Component {
  render() {
    return (
      <Root>
        <StackNavigation />
      </Root>
    );
  }
}
