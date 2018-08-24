import React, { Component } from "react";
import { View, Keyboard } from "react-native";
import { Field, reduxForm } from "redux-form";
import {
  validate,
  CHANGE_PASSWORD_FORM,
  SubmitChangePassword
} from "./functions";
import { commonTextField, LinearGradientButton, CustomAlert } from "../common";
import { checkNetworkConnectivity, clearStorage } from "../utility";
import { changePasswordStyles } from "./stylesheet/style";

import { withNavigation } from "react-navigation";

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, //Handling Activity Indicator
      isVisible: false
    };
  }

  //Handle for change password
  changePassword(values) {
    checkNetworkConnectivity().then(check => {
      if (check) {
        SubmitChangePassword(values, this.changePasswordCallbackHandler);
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
  }

  //Handler for submit
  changePasswordCallbackHandler = res => {
    if (res.data.code === "Success") {
      this.setState({ isVisible: true });
    }
  };

  //for on OK press for Modal
  modalHandler = async () => {
    await clearStorage();
    this.props.navigation.navigate("AuthLoading");
  };
  render() {
    const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
    return (
      <View style={changePasswordStyles.changePasswordBodyStyle}>
        <Field
          type="default"
          label="Enter old password"
          name="oldPassword"
          passwordField={true}
          component={commonTextField}
          maxLength={20}
          ref={componentRef => (this.oldPassword = componentRef)}
          refField="oldPassword"
          onEnter={() => {
            this.newPassword.getRenderedComponent().refs.newPassword.focus();
          }}
          focus
          withRef
        />
        <Field
          type="default"
          label="Enter new password"
          name="newPassword"
          passwordField={true}
          component={commonTextField}
          maxLength={20}
          ref={componentRef => (this.newPassword = componentRef)}
          refField="newPassword"
          onEnter={() => {
            this.confirm_password
              .getRenderedComponent()
              .refs.confirm_password.focus();
          }}
          focus
          withRef
        />
        <Field
          type="default"
          label="Confirm new password"
          name="confirm_password"
          passwordField={true}
          component={commonTextField}
          maxLength={20}
          ref={componentRef => (this.confirm_password = componentRef)}
          refField="confirm_password"
          focus
          withRef
        />

        <View style={{ marginTop: 10 }}>
          {this.state.loading ? (
            <Spinner color="blue" />
          ) : (
            <LinearGradientButton
              disable={invalid}
              title={"Submit"}
              clicked={handleSubmit(values => {
                Keyboard.dismiss();
                this.changePassword(values);
              })} //Handle submit through redux Action.
            />
          )}
        </View>
        <CustomAlert
          OKHandler={this.modalHandler}
          isVisible={this.state.isVisible}
          message="Password changed successfully"
          buttonTitle="OK"
        />
      </View>
    );
  }
}

const ChangePasswordForms = reduxForm({
  form: CHANGE_PASSWORD_FORM,
  validate,
  enableReinitialize: true,
  destroyOnUnmount: true, //Destroys ReduxForm values on Unmount
  keepDirtyOnReinitialize: true
})(ChangePasswordForm); //Wiring Local Form With Redux Form

export default withNavigation(ChangePasswordForms); //Use with withNavigation for use navigation props in child component
