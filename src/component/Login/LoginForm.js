import React, { Component } from "react";
import { View, Keyboard } from "react-native";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { DoLogin } from "../../actions";
import { LOGIN_FORM } from "./functions/loginConstant";
import { validate } from "./functions";
import { withNavigation } from "react-navigation";
import {
  commonTextField,
  CustomLinkButton,
  LinearGradientButton,
  CommonActivityIndicator
} from "../common";
import { checkNetworkConnectivity } from "../utility";
import { loginStyles } from "./stylesheet/style";

class LoginForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false //Handling Activity Indicator
    };
  }

  submitHandler = values => {
    //Check internet
    checkNetworkConnectivity().then(check => {
      //Get check value as a boolean
      if (check) {
        this.setState({ loading: true });
        Keyboard.dismiss(); //Keyboard dismiss when click on login
        this.props.DoLogin(values, this.handleLogincallback);
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
  };

  //HandleLoginCalback from loginActions
  handleLogincallback = res => {
    this.setState({ loading: false });

    if (res.connection) {
      alert("Connection to server failed");
      return;
    }

    if (res.data.success) {
      this.props.navigation.navigate("App");
    } else {
      alert("Invalid mobile number or password.");
    }
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
      <View style={loginStyles.loginBodyStyle}>
        <Field
          type="numeric"
          label="Mobile Number"
          name="mobileNo"
          icon_name="ios-phone-portrait"
          component={commonTextField}
          maxLength={10}
          ref={componentRef => (this.mobileNo = componentRef)}
          refField="mobileNo"
          onEnter={() => {
            this.password.getRenderedComponent().refs.password.focus();
          }}
          focus
          withRef
        />

        <Field
          type="default"
          label="Password"
          name="password"
          icon_name="lock"
          passwordField={true}
          component={commonTextField}
          maxLength={20}
          withRef
          ref={componentRef => (this.password = componentRef)}
          refField="password"
        />

        <View style={{ ...loginStyles.forgotPassWordLink, marginTop: 5 }}>
          <CustomLinkButton
            title={"Forgot your password?"}
            clicked={() => {
              Keyboard.dismiss();
              reset();
              navigation.navigate("ForgotPassword");
            }}
          />
        </View>

        {this.state.loading ? (
          <CommonActivityIndicator />
        ) : (
          <LinearGradientButton
            disable={invalid}
            style={{ marginTop: 10 }}
            title={"Login"}
            clicked={handleSubmit(values => this.submitHandler(values))} //Handle submit through redux Action.
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { data } = login;
  return { data };
};

const LoginForm = reduxForm({
  form: LOGIN_FORM,
  validate,
  enableReinitialize: true,
  destroyOnUnmount: true,
  keepDirtyOnReinitialize: true
})(LoginForms); //Wiring Local Form With Redux Form

const ReduxLoginForm = connect(
  mapStateToProps,
  { DoLogin }
)(LoginForm); //Wiring With Redux
export default withNavigation(ReduxLoginForm);
