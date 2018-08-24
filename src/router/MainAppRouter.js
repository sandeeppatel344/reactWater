import React from "react";
import { createStackNavigator } from "react-navigation";
import { styles } from "../stylesheet/style";
import DashboardScreen from "../component/aggregate/DashboardComponent";
import ChangePasswordScreen from "../component/ChangePassword/ChangePasswordComponent";
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

  

    CurrentMonthCharges: {
      screen: CurrentMonthChargesStack,
      navigationOptions: ({ navigation }) => ({
        headerMode: "screen",
        title: "Current Month Charges",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      })
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
