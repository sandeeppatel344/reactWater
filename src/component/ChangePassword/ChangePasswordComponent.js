import React, { Component } from "react";
import { ScrollView, BackHandler } from "react-native";
import TwoBoxLayout from "../../layout/TwoBoxLayout";
import ChangePasswordForm from "./ChangePasswordForm";
import { changePasswordComponentStyle } from "./functions";
import FooterCommon from "../../component/common/FooterCommon";

export default class ChangePasswordScreen extends Component {
  componentWillMount() {
    //Navigate to back screen on press of device back button
    BackHandler.addEventListener("hardwareBackPress", () =>
      this.props.navigation.goBack()
    );
  }

  componentWillUnmount() {
    //Remove listener for current page
    BackHandler.removeEventListener("hardwareBackPress", () =>
      this.props.navigation.goBack()
    );
  }

  render() {
    const changePasswordForm = <ChangePasswordForm />;
    const footerChangePassword = <FooterCommon />;
    return (
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TwoBoxLayout
          style={changePasswordComponentStyle}
          componentone={changePasswordForm}
          componenttwo={footerChangePassword}
        />
      </ScrollView>
    );
  }
}
