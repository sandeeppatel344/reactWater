import React, { Component } from "react";
import { BackHandler } from "react-native";
import FiveBoxLayout from "../../layout/FiveBoxLayout";

import ReadingDisplayComponent from "../CurrentMonthCharges/ReadingDisplayComponent";
import CurrentMonthDayComponent from "../CurrentMonthCharges/CurrentMonthDayComponent";
import { currentMonthChargesStyle } from "../CurrentMonthCharges/functions";
import CurrentMonthlyChargesFooter from "../CurrentMonthCharges/CurrentMonthlyChargesFooter";
import { DisplayMonthName } from "../../component/common";
import { withNavigation } from "react-navigation";
import { TabNavigator } from "../../router/CurrentMonthSubTabRouter";

class CurrentMonthChargesScreen extends Component {
  componentWillMount() {
    //Navigate to back screen on press of device back button
    BackHandler.addEventListener("hardwareBackPress", () =>
      this.props.navigation.pop()
    );
  }

  componentWillUnmount() {
    //Remove listener for current page
    BackHandler.removeEventListener("hardwareBackPress", () =>
      this.props.navigation.pop()
    );
  }

  render() {
    const tabNav = <TabNavigator />;
    const displayMonthName = <DisplayMonthName />;
    const currentMonthDayComponent = <CurrentMonthDayComponent />;
    const readingComponent = <ReadingDisplayComponent />;
    const currentMonthlyChargesFooters = <CurrentMonthlyChargesFooter />;
    return (
      <FiveBoxLayout
        style={currentMonthChargesStyle}
        componentone={displayMonthName}
        componenttwo={currentMonthDayComponent}
        componentthree={readingComponent}
        componentfour={tabNav}
        componentfive={currentMonthlyChargesFooters}
      />
    );
  }
}

export default withNavigation(CurrentMonthChargesScreen);
