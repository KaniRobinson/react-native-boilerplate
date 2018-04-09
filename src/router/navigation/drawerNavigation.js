// @flow
import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "../../container/HomeContainer";
import Sidebar from "../../container/SidebarContainer";

export default (DrawerNavigation = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
));
