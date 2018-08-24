import React, { Component } from "react";
import { View, FlatList, ScrollView } from "react-native";
import Cell from "../common/Cell";
import { getCurrentlyMonthlyConsumptionByHour } from "./functions/getCurrentMonthyConsumptionByHour";
import RefreshComponent from "../common/RefreshComponent";
import { CommonActivityIndicator } from "../common";
import { checkNetworkConnectivity } from "../utility";
import { connect } from "react-redux";

class CurrentMonthChargesMonthlyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null,
      loading: true,
      refreshPage: false
    };
  }
  //On Component Load call pageLoadHandler for get Data
  componentWillMount() {
    this.pageLoadHandler();
  }

  //Use componentWillReceiveProps to get data base on selected date
  componentWillReceiveProps() {
    this.pageLoadHandler();
  }
  // Page load handler
  pageLoadHandler = () => {
    checkNetworkConnectivity().then(check => {
      if (check) {
        getCurrentlyMonthlyConsumptionByHour(
          this.props.date,
          this.getCMCHourHandler
        );
      } else {
        this.setState({ refreshPage: true }); //display refresh Page
      }
    });
  };

  // call this method by click on refresh button
  refreshPageHandler = () => {
    this.pageLoadHandler(); //called on user clicking refresh.
  };

  getCMCHourHandler = res => {
    if (res) {
      this.setState({ tableData: res, loading: false, refreshPage: false });
    }
  };

  _renderItem = ({ item, index }) => (
    <View style={{ flexDirection: "row" }} key={index}>
      {item.map((eachItem, i) => {
        if (i !== 3) {
          return (
            <Cell
              key={Math.random()}
              cellContainerStyle={
                index % 2
                  ? { backgroundColor: "#f1f0ee" }
                  : { backgroundColor: "#fff" }
              }
            >
              {eachItem}
            </Cell>
          );
        }
        return (
          <Cell
            key={Math.random()}
            cellContainerStyle={
              index % 2
                ? { backgroundColor: "#ebe7e6" }
                : { backgroundColor: "#f1f0ee" }
            }
            textStyle={index == 0 ? { fontWeight: "bold" } : null}
          >
            {eachItem}
          </Cell>
        );
      })}
    </View>
  );

  render() {
    if (this.state.loading) {
      if (this.state.refreshPage) {
        return <RefreshComponent onPress={() => this.refreshPageHandler()} />;
      }

      return <CommonActivityIndicator />;
    }

    return (
      <ScrollView
        contentContainerStyle={{ backgroundColor: "#fff" }}
        horizontal={true}
        pinchGestureEnabled={true}
      >
        <FlatList
          data={this.state.tableData}
          initialNumToRender={24}
          stickyHeaderIndices={[0]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ currentDayReading }) => {
  const { date } = currentDayReading;
  return { date };
};
export default connect(
  mapStateToProps,
  null
)(CurrentMonthChargesMonthlyComp);
