import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import { MainAppStack } from "./MainAppRouter";
import DeregisterScreen from "../component/common/DeregisterComponent";
import Logout from "../component/common/Logout";
import { routerStyles } from "./routerStyles";

import SideDrawerComponent from "./SideDrawerComponent";

//Main SideDrawer Stack
export const NavigationDrawerStack = createDrawerNavigator(
  {
    Profile: {
      screen: MainAppStack,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/profile.png")}
          />
        )
      }
    },
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
    HistoricalPerfomance: {
      screen: MainAppStack,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/historical.png")}
          />
        ),
        title: "Historical Perfomance"
      }
    },
    SetTarget: {
      screen: MainAppStack,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/settarget.png")}
          />
        ),
        title: "Set Target"
      }
    },

    Deregister: {
      screen: DeregisterScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            style={[
              routerStyles.drawerIconsStyles,
              focused && { tintColor: tintColor }
            ]}
            resizeMode="stretch"
            source={require("../assets/icons/deregister.png")}
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
