import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import { MainAppStack } from "./MainAppRouter";
import Logout from "../component/common/Logout";
import { routerStyles } from "./routerStyles";

import SideDrawerComponent from "./SideDrawerComponent";

//Main SideDrawer Stack
export const NavigationDrawerStack = createDrawerNavigator(
  {
   
    ChangePassword: {
      screen: MainAppStack,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/changepassword.png")}
          />
        ),
        title: "Change Password"
      }
    },
    Dashboard: {
      screen: MainAppStack,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/dashboard.png")}
          />
        )
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/logout.png")}
          />
        )
      }
    }
  },
  {
    drawerLockMode: "locked-closed",
    initialRouteName: "Dashboard",

    contentOptions: {
      activeTintColor: "#1bafff",
      inactiveTintColor: "black"
    },
    contentComponent: props => {
      return <SideDrawerComponent {...props} />;
    },

    drawerPosition: "left",
    drawerWidth: 240,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);
