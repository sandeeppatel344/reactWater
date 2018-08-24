import React, { Component } from "react";
import { View, Text } from "react-native";
import { Rupees } from "../utility";
import { connect } from "react-redux";
import { currentMonthChargesStyles } from "./stylesheet/style";

class ReadingDisplayComponent extends Component {
  render() {
    const {
      reading,
      charges,
      daily_consumption,
      forcate_consumption
    } = this.props;

    return (
      <View style={currentMonthChargesStyles.readingContainer}>
        <View style={currentMonthChargesStyles.readingStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text style={currentMonthChargesStyles.displayMUnit}>
              {reading} M
            </Text>
            <Text style={currentMonthChargesStyles.displayMUnitVal}>3</Text>
          </View>
          <Text style={currentMonthChargesStyles.readingLableText}>
            Reading
          </Text>
        </View>
        <View style={currentMonthChargesStyles.readingStyle}>
          <Text style={currentMonthChargesStyles.readingLable}>
            {Rupees} {charges}
          </Text>
          <Text style={currentMonthChargesStyles.readingLableText}>
            Charges
          </Text>
        </View>
        <View style={currentMonthChargesStyles.readingStyle}>
          <Text style={currentMonthChargesStyles.readingLable}>
            {forcate_consumption} L
          </Text>
          <Text style={currentMonthChargesStyles.readingLableText}>
            Forecasted{" "}
          </Text>
        </View>
        <View style={currentMonthChargesStyles.readingStyle}>
          <Text style={currentMonthChargesStyles.readingLable}>
            {daily_consumption} L
          </Text>
          <Text style={currentMonthChargesStyles.readingLableText}>
            Consumption{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ currentDayReading }) => {
  return currentDayReading;
};

export default connect(
  mapStateToProps,
  null
)(ReadingDisplayComponent);
