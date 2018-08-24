import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Keyboard
} from "react-native";
import { Row } from "../common";
import { resetLoginForm } from "../../actions";
import { loginStyles } from "./stylesheet/style";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

//Footer Panel For New User Registration

class NewRegistration extends Component {
  render() {
    return (
      <View style={loginStyles.newRegistration}>
        <ImageBackground
          source={require("../../assets/waves.png")}
          imageStyle={loginStyles.imageFooterBackground}
          style={loginStyles.imageBackgroundContainer}
          position={"relative"}
        >
         {/*  <Row style={loginStyles.newRegistrationButton}>
            <TouchableOpacity
              style={{
                width: "100%"
              }}
              onPress={() => {
                Keyboard.dismiss();
                this.props.resetLoginForm();
                this.props.navigation.navigate("Register");
              }}
            >
              <View style={loginStyles.newUserRegisterButton}>
                <Text style={loginStyles.newRegistrationButtonText}>
                  New User Registration
                </Text>
              </View>
            </TouchableOpacity>
          </Row> */}
        </ImageBackground>
      </View>
    );
  }
}

NewRegistration = connect(
  null,
  { resetLoginForm }
)(NewRegistration);

export default withNavigation(NewRegistration);
