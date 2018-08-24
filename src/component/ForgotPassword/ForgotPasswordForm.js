import React from "react";
import { View, Keyboard } from "react-native";
import { Spinner } from "native-base";
import { Field, reduxForm } from "redux-form";
import { validate, FORGOT_PASSWORD_FORM } from "./functions";
import { forgotPasswordStyles } from "./stylesheet/style";
import { commonTextField, LinearGradientButton } from "../common";
import { checkNetworkConnectivity } from "../utility";
import OTPModal from "../OTP/OTPModalComponent";
import { withNavigation } from "react-navigation";

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: "",
      loading: false,
      otpModalVisiblity: false
    };
  }

  //Open OTP modal by this handler
  openOTPModalHandler = () => {
    this.setState({ otpModalVisiblity: true });
  };

  //Close OTP modal by this handler
  closeOTPModalHandler = () => {
    this.setState({ otpModalVisiblity: false });
  };

  //After click on OK button close OTP modal
  closeOTPOkHandler = () => {
    this.props.reset(); //reset redux Form
    this.setState({ otpModalVisiblity: false });
  };
  //Submit mobile no for new password
  handleForgot = values => {
    this.setState({ mobileNo: values.mobileNo });
    checkNetworkConnectivity().then(check => {
      if (check) {
        Keyboard.dismiss();
        this.setState({ loading: false, otpModalVisiblity: true });
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
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
      <View style={forgotPasswordStyles.formBody}>
        <Field
          type="numeric"
          label="Enter Mobile Number"
          name="mobileNo"
          component={commonTextField}
          maxLength={10}
        />

        <View style={{ marginTop: 10 }}>
          {this.state.loading ? (
            <Spinner color="blue" />
          ) : (
            <LinearGradientButton
              disable={invalid}
              style={{ marginTop: 10 }}
              title={"Submit"}
              clicked={handleSubmit(values => this.handleForgot(values))} //Handle submit through redux Action.
            />
          )}
        </View>

        <OTPModal
          otpModalVisiblity={this.state.otpModalVisiblity}
          closeModal={this.closeOTPModalHandler}
          closeOTPOkHandler={this.closeOTPOkHandler}
          mobileNo={this.state.mobileNo ? this.state.mobileNo : null}
          from_forgot={true}
        />
      </View>
    );
  }
}

const ForgotPasswordForms = reduxForm({
  form: FORGOT_PASSWORD_FORM,
  validate,
  enableReinitialize: true,
  destroyOnUnmount: true, //Destroys ReduxForm values on Unmount
  keepDirtyOnReinitialize: true
})(ForgotPasswordForm);

export default withNavigation(ForgotPasswordForms);
