import React, { Component } from "react";
import DashboardFooter from "../DashBoard/DashboardFooter"; //refractored
import RefreshComponent from "../../component/common/RefreshComponent";
import { CommonActivityIndicator } from "../common";
import { checkNetworkConnectivity } from "../utility";

import ThreeBoxLayout from "../../layout/ThreeBoxLayout";
import {
  dashbaordComponentStyles,
  getDashboardDetails
} from "../DashBoard/functions";
import MontlyCharges from "../DashBoard/MonthlyCharges";
import { TimeStampComponent } from "../../component/common/TimeStampComponent";

class DashboardScreen extends Component {
  state = { data: {}, loading: true, refreshPage: false };
  componentWillMount() {
    //call to get dashboard details
    this.pageLoadHandler();
  }

  pageLoadHandler = () => {
    checkNetworkConnectivity().then(check => {
      if (check) {
        getDashboardDetails(this.dashboardHandler);
      } else {
        this.setState({ refreshPage: true }); //display refresh Page
      }
    });
  };

  //callback handler
  dashboardHandler = res => {
    if (res.data) {
      this.setState({ data: res.data[0], loading: false, refreshPage: false });
    }
  };

  refreshPageHandler = () => {
    this.pageLoadHandler(); //called on user clicking refresh.
  };

  render() {
    const {
      monthlyCharges,
      monthlyTargetLimit,
      estimatedDate,
      forcastedCharges
    } = this.state.data;

    //Snippet for displaying refresh|loader
    if (this.state.loading) {
      if (this.state.refreshPage) {
        return <RefreshComponent onPress={() => this.refreshPageHandler()} />;
      }

      return <CommonActivityIndicator />;
    }

    const timestamp = <TimeStampComponent />;
    const monthlyChargeComp = (
      <MontlyCharges
        monthlycharges={monthlyCharges}
        monthlytarget={monthlyTargetLimit}
        forcastedcharges={forcastedCharges}
      />
    );

    const dashboardFooter = (
      <DashboardFooter
        monthlytarget={monthlyTargetLimit}
        estimationdate={estimatedDate}
        monthlycharges={monthlyCharges}
      />
    );

    return (
      <ThreeBoxLayout
        style={dashbaordComponentStyles}
        componentone={timestamp}
        componenttwo={monthlyChargeComp}
        componentthree={dashboardFooter}
      />
    );
  }
}

export default DashboardScreen;
