// @flow
import React from "react";
import { StackNavigator } from "react-navigation";
// import DrawerNavigation from "@navigation/drawerNavigation";
import BlankPageContainer from "@containers/BlankPageContainer";

export default (StackNavigation = StackNavigator(
  {
    BlankPage: { screen: BlankPageContainer }
    // Drawer: { screen: DrawerNavigation }
  },
  {
    initialRouteName: "BlankPage",
    headerMode: "none"
  }
));
