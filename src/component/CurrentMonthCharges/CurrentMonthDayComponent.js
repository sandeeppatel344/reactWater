import React, { Component } from "react";
import { getCurrentMonthReading } from "./functions";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { CurrentDayCharges } from "../../actions";
import { connect } from "react-redux";
import { DotView } from "../common";
import { currentMonthChargesStyles } from "./stylesheet/style";
import { withNavigation } from "react-navigation";

class CurrentMonthDayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthDay: [],
      selected: true,
      currentDay: null,
      selctedItem: null
    };
  }

  // On page load call method
  componentWillMount() {
    getCurrentMonthReading(this.getDetailsHandler);
    //Navigate to back screen on press of device back button
  }

  // On page load call method
  getDetailsHandler = res => {
    let days = res.map(data => {
      return moment(data.date, "DD/MM/YY").format("D");
    });
    let currentDay = moment().format("D");
    let findCurrentDay = days.indexOf(currentDay);
    this.setState({ monthDay: res, currentDay: findCurrentDay + 1 });

    this.displayCurrentDayCharges(res[findCurrentDay], findCurrentDay);
  };

  displayCurrentDayCharges(item, index) {
    this.setState({ selctedItem: item });
    this.props.CurrentDayCharges(item);
    //this.selectedItem = index
  }

  render() {
    return (
      <View>
        <View style={currentMonthChargesStyles.currentMonthDayContainer}>
          <FlatList
            style={{ marginTop: 5 }}
            extraData={this.state}
            horizontal={true}
            data={this.state.monthDay}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  onPress={() => this.displayCurrentDayCharges(item, index)}
                >
                  <View style={currentMonthChargesStyles.currentMonthDay}>
                    <Text>{index + 1}</Text>
                    {this.state.selctedItem.date == item.date ? (
                      <DotView style={{ backgroundColor: "#38B014" }} />
                    ) : null}
                    {this.state.selctedItem.date != item.date &&
                    this.state.currentDay === index + 1 ? (
                      <DotView style={{ backgroundColor: "#1F93F5" }} />
                    ) : null}
                    {this.state.selctedItem.date != item.date &&
                    item.is_exceeded ? (
                      <DotView style={{ backgroundColor: "#FA5555" }} />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  { CurrentDayCharges }
)(withNavigation(CurrentMonthDayComponent));
