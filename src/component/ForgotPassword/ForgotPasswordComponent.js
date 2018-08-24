import React, { Component } from "react";
import { ScrollView } from "react-native";
import TwoBoxLayout from "../../layout/TwoBoxLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { forgotPasswordComponentStyle } from "./functions";
import FooterCommon from "../../component/common/FooterCommon";

class ForgotPasswordScreen extends Component {
  render() {
    //Specify Modules Below To Be Attached
    const forgotPasswordForm = <ForgotPasswordForm />;
    const footerForgetPassword = <FooterCommon />;

    return (
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TwoBoxLayout
          style={forgotPasswordComponentStyle}
          componentone={forgotPasswordForm}
          componenttwo={footerForgetPassword}
        />
      </ScrollView>
    );
  }
}

export default ForgotPasswordScreen;
