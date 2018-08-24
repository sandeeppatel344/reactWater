import React from "react";
import { View, Keyboard, Text } from "react-native";
import { Spinner } from "native-base";
import { Field, reduxForm } from "redux-form";
import { validate, CREATE_NEW_PASSWORD_FORM, resetPassword } from "./functions";
import { createPasswordStyles } from "./stylesheet/style";
import { commonTextField, LinearGradientButton, CustomAlert } from "../common";
import { checkNetworkConnectivity } from "../utility";
import { withNavigation } from "react-navigation";

class CreatePasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isVisible: false
    };
  }

  //Handle for create password
  handleCreatePassword = values => {
    let data = {
      oldPassword: values.new_password,
      newPassword: values.new_password,
      mobileNo: this.props.navigation.getParam("mobileNo")
    };

    checkNetworkConnectivity().then(check => {
      if (check) {
        Keyboard.dismiss();
        resetPassword(data, this.resetCallbackHandler); //calling resetPassword service
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
  };

  resetCallbackHandler = res => {
    if (res.data.code === "Success") {
      this.setState({ loading: false, isVisible: true });
    }
  };

  //handle for OK press on Modal
  Modalhandler = () => {
    this.props.navigation.navigate("AuthLoading");
  };

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      invalid,
      navigation
    } = this.props;

    return (
      <View style={createPasswordStyles.formBody}>
        <Field
          type="default"
          label="Enter new password"
          name="new_password"
          passwordField={true}
          component={commonTextField}
          maxLength={20}
          withRef
          ref={componentRef => (this.new_password = componentRef)}
          refField="new_password"
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
          withRef
          ref={componentRef => (this.confirm_password = componentRef)}
          refField="confirm_password"
        />
        <View style={{ marginTop: 10 }}>
          {this.state.loading ? (
            <Spinner color="blue" />
          ) : (
            <LinearGradientButton
              disable={invalid}
              style={{ marginTop: 10 }}
              title={"Submit"}
              clicked={handleSubmit(values =>
                this.handleCreatePassword(values)
              )} //Handle submit through redux Action.
            />
          )}
        </View>
        <CustomAlert
          OKHandler={this.Modalhandler}
          isVisible={this.state.isVisible}
          message="Password changed successfully"
          buttonTitle="OK"
        />
      </View>
    );
  }
}

const CreateNewPasswordForms = reduxForm({
  form: CREATE_NEW_PASSWORD_FORM,
  validate,
  enableReinitialize: true,
  destroyOnUnmount: true, //Destroys ReduxForm values on Unmount
  keepDirtyOnReinitialize: true
})(CreatePasswordForm);
export default withNavigation(CreateNewPasswordForms);
