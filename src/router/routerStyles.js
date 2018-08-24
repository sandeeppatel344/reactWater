import { StyleSheet } from "react-native";

export const routerStyles = StyleSheet.create({
  modalSmallContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalButtonHolder: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "flex-end"
  },
  drawerIconsStyles: {
    height: 20,
    width: 20,
    tintColor: "#252525"
  },
  drawerLogoBoard: {
    height: "70%",
    minHeight: 80,
    paddingLeft: 25,
    paddingTop: 15,
    width: "100%",
    position: "relative",

    alignItems: "flex-start"
  },
  drawerLogo: {
    height: 70,
    width: 70,
    tintColor: "white"
  },
  drawerTagRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  drawerIconBackNav: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingRight: 20,
    paddingBottom: 20
  },
  drawLogboardContainer: {
    height: 150,
   
    backgroundColor: "#1bafff"
  },
  drawerWelcometxt: { color: "#ffffff", fontSize: 13, fontWeight: "bold" },
  drawerWelcomeBox: {
    paddingLeft: 20,
    marginTop:40,
    paddingBottom: 8,
    justifyContent: "flex-end",
    flex: 1
  }
});
