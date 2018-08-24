import { Alert, BackHandler } from "react-native";

export const serverErrorhandler = () => {
  Alert.alert(
    "Server Error",
    "App will now exit , Please try again after some time!",
    [{ text: "Ok", onPress: () => BackHandler.exitApp() }],
    { cancelable: false }
  );
};
