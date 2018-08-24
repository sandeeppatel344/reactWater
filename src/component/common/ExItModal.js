import React from "react";
import { View, Text } from "react-native";
import { routerStyles } from "../../router/routerStyles";
import Modal from "react-native-modal";
import { CustomLinkButton } from "./CustomLinkButton";
export const ExitModal = props => (
  <Modal
    isVisible={props.exitModalVisible}
    onBackButtonPress={props.NoHandler}
    style={{ borderRadius: 2, backgroundColor: "transparent" }}
  >
    <View style={routerStyles.modalSmallContainer}>
      <View style={{ marginBottom: 5 }}>
        <Text>Are you sure you want to exit?</Text>
      </View>

      <View style={routerStyles.modalButtonHolder}>
        <View style={{ marginRight: 26 }}>
          <CustomLinkButton title="No" clicked={props.NoHandler} />
        </View>
        <View>
          <CustomLinkButton title="Yes" clicked={props.YesHandler} />
        </View>
      </View>
    </View>
  </Modal>
);

/* 
Usage:
  <ExitModal
          exitModalVisible={this.state.exitModalVisible}
          NoHandler={this.exitModal}
          YesHandler={this.exitApp}
        />


*/
