import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../stylesheet/style";
import { dashboardStyles } from "./stylesheet/style";

import { Row } from "../common";
import RoundView from "../common/RoundView";
import { withNavigation } from "react-navigation";

class MontlyCharges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleExceededMessage: false,
      isVisibleForcastedExceededMessage: false
    };
  }

  componentWillMount() {
    if (
      parseFloat(this.props.monthlycharges) >
        parseFloat(this.props.monthlytarget) &&
      parseFloat(this.props.monthlytarget) > 0
    ) {
      this.setState({ isVisibleExceededMessage: true });
    }

    if (
      parseFloat(this.props.forcastedcharges) >
        parseFloat(this.props.monthlytarget) &&
      parseFloat(this.props.monthlytarget) > 0
    ) {
      this.setState({ isVisibleForcastedExceededMessage: true });
    }
  }
  GoToCurrentMonthlyCharges = () => {
    this.props.navigation.navigate("CurrentMonthCharges");
  };
  render() {
    return (
      <View style={styles.monthlyChargesTopContainer}>
        <View style={styles.monthlyChargesContainer}>
          <RoundView
            outerRoundStyle={
              this.state.isVisibleExceededMessage
                ? { borderColor: "#FF282C" }
                : null
            }
            innerRoundStyle={
              this.state.isVisibleExceededMessage
                ? { backgroundColor: "#FF282C" }
                : null
            }
            message={"Actual Charges till date"}
            charges={this.props.monthlycharges}
            handler={this.GoToCurrentMonthlyCharges}
          />
          <RoundView
            outerRoundStyle={
              this.state.isVisibleExceededMessage
                ? { borderColor: "#FF282C" }
                : { borderColor: "#FFCC00" }
            }
            innerRoundStyle={
              this.state.isVisibleExceededMessage
                ? { backgroundColor: "#FF282C" }
                : { backgroundColor: "#FFCC00" }
            }
            message={"Forcasted Monthly Charges"}
            charges={this.props.forcastedcharges}
            handler={this.GoToCurrentMonthlyCharges}
          />
        </View>
        <View style={dashboardStyles.exceedMessageContainer}>
          {this.state.isVisibleExceededMessage && (
            <Row>
              <Image
                source={require("../../assets/icons/water-drop.png")}
                style={dashboardStyles.exceedMessage}
              />
              <Text>Actual charges exceed monthly limit</Text>
            </Row>
          )}
          {this.state.isVisibleForcastedExceededMessage && (
            <Row style={{ marginTop: 5 }}>
              <Image
                source={require("../../assets/icons/water-drop.png")}
                style={dashboardStyles.exceedMessage}
              />
              <Text>Foretasted charges exceed monthly limit</Text>
            </Row>
          )}
        </View>
      </View>
    );
  }
}

/* 
Usage: <MontlyCharges monthlycharges={monthlycharges} />

*/
export default withNavigation(MontlyCharges);
