import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  BackHandler
} from "react-native";
import { styles } from "../../stylesheet/style";
import { dashboardStyles } from "./stylesheet/style";
import { Rupees } from "../utility";
import { withNavigation } from "react-navigation";
import { loginStyles } from "../Login/stylesheet/style";
import { ExitModal } from "../../component/common/ExItModal";
import { Row } from "../common";

class DashboardFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleTargetMessage: true,
      exitModalVisible: false
    };
  }

  componentWillMount() {
    if (parseFloat(this.props.monthlytarget) > 0) {
      this.setState({ isVisibleTargetMessage: false });
    }
  }

  componentDidMount() {
    //Add Event for Handle Android device back button
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount = () => {
    // Remove event from addEventListener
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  };

  //callback handler for device back button
  handleBackButton = () => {
    this.setState({ exitModalVisible: true });
    return true;
  };

  //Exit App press on Yes button
  exitApp = () => {
    BackHandler.exitApp();
  };

  //Exit modal click on Yes and No
  exitModal = () => {
    this.setState({ exitModalVisible: false });
  };

  render() {
    const { monthlytarget, estimationdate } = this.props;

    return (
      <View style={styles.footerViewContainer}>
        <ImageBackground
          source={require("../../assets/dashboard-bg.png")}
          imageStyle={styles.footerImageStyle}
          style={{
            ...styles.footerImageBackground,
            justifyContent: "center",
            height: "100%"
          }}
          position={"absolute"}
        >
          {!this.state.isVisibleTargetMessage && (
            <View style={dashboardStyles.dashboardFooterContainer}>
              <View style={dashboardStyles.monthlyTargetContainer}>
                <TouchableOpacity
          
                >
                  <Text style={dashboardStyles.monthlyLimitRuppess}>
                    {Rupees} {monthlytarget}
                  </Text>
                  <Text style={dashboardStyles.monthlyTargetText}>
                    Monthly target limit
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={dashboardStyles.estimationDateContainer}>
                <Text style={dashboardStyles.estimationDate}>
                  {estimationdate}
                </Text>
                <Text style={dashboardStyles.estimationDateText}>
                  Estimated date for exceeding monthly target limit
                </Text>
              </View>
            </View>
          )}
         {/*  {this.state.isVisibleTargetMessage && (
            <Row style={loginStyles.newRegistrationButton}>
              <TouchableOpacity
                style={{
                  width: "100%"
                }}
           
              >
                <View style={loginStyles.newUserRegisterButton}>
                  <Text style={loginStyles.newRegistrationButtonText}>
                    Set Monthly target limit
                  </Text>
                </View>
              </TouchableOpacity>
            </Row>
          )} */}
        </ImageBackground>

        <ExitModal
          exitModalVisible={this.state.exitModalVisible}
          NoHandler={this.exitModal}
          YesHandler={this.exitApp}
        />
      </View>
    );
  }
}

export default withNavigation(DashboardFooter); //Use  withNavigation for use navigation props in child component

//Footer for Register Screen
