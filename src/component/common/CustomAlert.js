import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../../stylesheet/style";
import Modal from "react-native-modal";
import { CustomLinkButton } from "./CustomLinkButton";
export class CustomAlert extends Component {
  render() {
    const { OKHandler, isVisible, message, buttonTitle } = this.props;
    return (
      <Modal isVisible={isVisible} style={styles.customAlertModal}>
        <View style={styles.customAlert}>
          <View style={{ marginBottom: 5 }}>
            <Text>{message}</Text>
          </View>

          <View style={styles.customAlertButton}>
            <CustomLinkButton title={buttonTitle} clicked={OKHandler} />
          </View>
        </View>
      </Modal>
    );
  }
}

//Footer for Register Screen
