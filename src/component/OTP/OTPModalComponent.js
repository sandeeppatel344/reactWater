import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./stylesheet/otpStyle";
import { Icon } from "native-base";
import { checkNetworkConnectivity } from "../utility";
import { validate } from "./functions/validation";
import Modal from "react-native-modal";
import { CustomLinkButton } from "../common";
import { withNavigation } from "react-navigation";
import { generateOTP, sendOTP } from "./functions";
import { CommonActivityIndicator } from "../common";

class OTPModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state_OTP: "",
      error: "",
      loading: false
    };
  }

  //OTP submit handling
  OTPSubmit = () => {
    checkNetworkConnectivity().then(check => {
      if (check) {
        if (this.state.state_OTP === "") {
          this.setState({ error: "Please enter OTP" });
        }

        if (this.state.error === null) {
          let data = {
            mobileNo: this.props.mobileNo
          };

          generateOTP(data, this.handleGenerateOtpCallback); //calling generate OTP service
        }
      } else {
        alert("Please turn on your mobile internet.");
      }
    });
  };

  //handle generate otp callback
  handleGenerateOtpCallback = res => {
    if (this.state.state_OTP == res.data.response.data.otp) {
      this.setState({ loading: true });

      let data = {
        mobileNo: this.props.mobileNo,
        otp: this.state.state_OTP
      };

      sendOTP(data, this.handleSendOtpCallback); //calling send OTP service
    } else {
      this.setState({ error: "Wrong OTP" });
    }
  };

  handleSendOtpCallback = res => {
    this.setState({ loading: false });
    if (res.data.code === "Success") {
      this.props.from_forgot //check fro props from forgot password
        ? this.handleFromForgot()
        : this.handleFromRegister();
    }
  };

  //handle OTP modal for Register
  handleFromRegister = () => {
    alert("Registration successfully.");
    this.props.navigation.navigate("AuthLoading");
  };

  //handle OTP modal for Forgot
  handleFromForgot = () => {
    this.props.closeOTPOkHandler();
    this.props.navigation.navigate("CreatePassword", {
      mobileNo: this.props.mobileNo
    });
  };

  render() {
    const { otpModalVisiblity, closeModal, mobileNo } = this.props;
    let lastTwoNo = "";

    //To get Last two digits from user entered mobile number.
    if (mobileNo) {
      lastTwoNo = mobileNo.slice(-2);
    }

    return (
      <Modal
        isVisible={otpModalVisiblity}
        onBackButtonPress={closeModal}
        style={{ borderRadius: 2 }}
      >
        <View style={styles.modalContent}>
          <View style={{ marginBottom: 5 }}>
            <Text>
              OTP successfully sent to mobile number xxxxxxxx
              {lastTwoNo}
            </Text>
          </View>

          <View style={{ width: 250 }}>
            <View>
              <Text style={styles.enterOtplabel}>Enter OTP</Text>
            </View>

            {this.state.loading ? (
              <CommonActivityIndicator />
            ) : (
              <TextInput
                style={[
                  styles.customTextinput,
                  this.state.error && { borderBottomColor: "red" }
                ]}
                placeholder=""
                onChangeText={value => {
                  this.setState({
                    error: validate(value, "OTP_NO"),
                    type: "OTP_NO",
                    state_OTP: value
                  });
                }}
                maxLength={6}
                keyboardType={"numeric"}
              />
            )}
            {this.state.error ? (
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Text style={{ color: "red", paddingLeft: 5 }}>
                  {this.state.error}
                </Text>
                <Icon
                  name={"ios-warning"}
                  style={{ fontSize: 15, color: "red" }}
                />
              </View>
            ) : null}
          </View>

          <View style={styles.modalButtonHolder}>
            <View style={{ marginRight: 26 }}>
              <CustomLinkButton title="Resend OTP" clicked={() => {}} />
            </View>

            <View>
              <CustomLinkButton title="OK" clicked={() => this.OTPSubmit()} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

//export default OTPModal;

export default withNavigation(OTPModal);
