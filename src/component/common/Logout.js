import React, { Component } from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { routerStyles } from "../../router/routerStyles";
import { checkNetworkConnectivity, clearStorage } from "../utility";
import { doLogout } from "../../actions";
import { CustomLinkButton } from "./CustomLinkButton";

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  //Handle for on Logout Pressed
  logoutHandler = () => {
    checkNetworkConnectivity().then(check => {
      if (check) {
        doLogout(this.doLogoutCallbackHandler);
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
  };

  doLogoutCallbackHandler = async res => {
    if (res.data.response.code === "Success") {
      await clearStorage();
      this.props.navigation.navigate("AuthLoading");
    }
  };

  render() {
    return (
      <Modal
        isVisible={this.state.isVisible}
        onBackButtonPress={() => this.props.navigation.goBack()}
        style={{ borderRadius: 2, backgroundColor: "transparent" }}
      >
        <View style={routerStyles.modalSmallContainer}>
          <View style={{ marginBottom: 5 }}>
            <Text>
              Are you sure? Logging out will remove all data from this device.
            </Text>
          </View>

          <View style={routerStyles.modalButtonHolder}>
            <View style={{ marginRight: 26 }}>
              <CustomLinkButton
                title="Cancel"
                clicked={() => this.props.navigation.goBack()}
              />
            </View>
            <View>
              <CustomLinkButton
                title="Logout"
                clicked={() => this.logoutHandler()}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Logout;
