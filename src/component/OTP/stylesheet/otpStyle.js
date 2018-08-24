import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  customTextinput: {
    fontSize: 15,
    marginTop: 0,
    width: "100%",
    borderBottomColor: "#d1d1d1",
    borderBottomWidth: 1,
    paddingVertical: 0,

    backgroundColor: "#fff"
  },
  modalButtonHolder: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "flex-end"
  },
  enterOtplabel: {
    fontSize: 13,
    paddingTop: 5,
    color: "#959595"
  }
});
