import { createStackNavigator } from "react-navigation";
import LoginScreen from "../component/Login/LoginComponent";
import ForgotPasswordScreen from "../component/ForgotPassword/ForgotPasswordComponent";
import CreateNewPasswordScreen from "../component/CreatePassword/CreateNewPasswordComponent";
import AllMetersListComponent from '../component/AllMetersList/AllMetersList'
import { styles } from "../stylesheet/style";

export const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        headerTitle: "Forgot Password",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      }
    },
    CreatePassword: {
      screen: CreateNewPasswordScreen,
      navigationOptions: {
        headerTitle: "New Password",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      }
    },
    AllMeters: {
      screen: AllMetersListComponent,
      navigationOptions: {
        headerTitle: "Meters",
        headerStyle: styles.headerColor,
        headerTitleStyle: styles.headerTextColor,
        headerTintColor: "white"
      }
    }
  },
  {
    initialRouteName: "AllMeters"
  }
);
