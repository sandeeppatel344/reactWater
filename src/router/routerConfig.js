import { createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../component/common/AuthLoadingScreen";
import { NavigationDrawerStack } from "./SideNavigationRouter";
import { AuthStack } from "./AuthRouter";

//Main Wiring of App in Switchnavigator
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: NavigationDrawerStack,
    Auth: AuthStack
  },
  {
    drawerLockMode: "locked-closed",
    initialRouteName: "AuthLoading"
  }
);
export default AppNavigator;
