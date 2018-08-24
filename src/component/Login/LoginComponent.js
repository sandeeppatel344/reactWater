import React, { Component } from "react";
import ThreeBoxLayout from "../../layout/ThreeBoxLayout";
import LoginForm from "./LoginForm";
import { logoHeader } from "../common/logoHeader";
import NewRegistration from "./NewRegistration";
import { ScrollView } from "react-native";
import { loginComponentStyles } from "./functions";

class LoginScreen extends Component {
  render() {
    //Specify Modules Below To Be Attached
    const loginForm = <LoginForm />;
    const newRegistration = <NewRegistration />;

    //Use ThreeBoxLayout
    return (
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ThreeBoxLayout
          style={loginComponentStyles}
          componentone={logoHeader}
          componenttwo={loginForm}
          componentthree={newRegistration}
        />
      </ScrollView>
    );
  }
}

export default LoginScreen;
