import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  imageBackgroundContainer: {
    height: "90%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  newUserRegisterButton: {
    backgroundColor: "#eba738",
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "pink",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 3
  },
  forgotPassWordLink: {
    alignItems: "flex-end",
    color: "#0099ff"
  },
  loginBodyStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  keepMeLogin: {
    marginTop: 10,
    left: 0,
    justifyContent: "flex-start"
  },
  newRegistration: {
    flex: 1,
    height: 100
  },
  imageFooterBackground: {
    resizeMode: "stretch",
    height: "100%"
  },
  newRegistrationButton: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  },
  newRegistrationButtonText: {
    color: "white",
    fontSize: 15,
    paddingBottom: 5
  }
});
