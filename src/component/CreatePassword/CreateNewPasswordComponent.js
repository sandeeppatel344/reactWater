import React, { Component } from "react";
import { ScrollView } from "react-native";
import TwoBoxLayout from "../../layout/TwoBoxLayout";
import { createNewPasswordComponentStyle } from "./functions";
import FooterCommon from "../../component/common/FooterCommon";
import CreatePasswordForm from "./CreatePasswordForm";

class CreateNewPasswordScreen extends Component {
  render() {
    const createPasswordForm = <CreatePasswordForm />;
    const footerForgetPassword = <FooterCommon />;

    return (
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TwoBoxLayout
          style={createNewPasswordComponentStyle}
          componentone={createPasswordForm}
          componenttwo={footerForgetPassword}
        />
      </ScrollView>
    );
  }
}

export default CreateNewPasswordScreen;
