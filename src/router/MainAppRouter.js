import React from "react";
import { createStackNavigator } from "react-navigation";
import { styles } from "../stylesheet/style";
import DashboardScreen from "../component/aggregate/DashboardComponent";
import SetTargetScreen from "../component/aggregate/SetTargetComponent";
import ProfileScreen from "../component/Profile/ProfileComponent";
import ChangePasswordScreen from "../component/ChangePassword/ChangePasswordComponent";
import HistoricalPerfomanceScreen from "../component/HistoricalPerfomance/HistoricalPerfomanceComponent";
import { MenuButton } from "../component/common/MenuButton";
import { CurrentMonthChargesStack } from "./CurrenMonthTabRouter";

//Initial Screen After Login/Keep Me Logged in
export const MainAppStack = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <MenuButton navigate={navigation} />,
        headerMode: "screen",
        title: "Dashboard",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Profile",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    },
    ChangePassword: {
      screen: ChangePasswordScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Change Password",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    },

    SetTarget: {
      screen: SetTargetScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Set Target",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    },

    CurrentMonthCharges: {
      screen: CurrentMonthChargesStack,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Current Month Charges",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    },
    HistoricalPerfomance: {
      screen: HistoricalPerfomanceScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Historical Perfomance",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white",
        drawerLockMode: "locked-closed"
      })
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
