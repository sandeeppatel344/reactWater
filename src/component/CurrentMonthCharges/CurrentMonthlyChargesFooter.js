import React, { Component } from "react";
import { ImageBackground, View, Text } from "react-native";
import { styles } from "../../stylesheet/style";
import { currentMonthChargesStyles } from "./stylesheet/style";

import { DotView } from "../common";
class CurrentMonthlyChargesFooter extends Component {
  render() {
    return (
      <View style={styles.footerViewContainer}>
        <ImageBackground
          source={require("../../assets/waves.png")}
          imageStyle={styles.footerImageStyle}
          style={styles.footerImageBackground}
          position={"absolute"}
        >
          <View style={currentMonthChargesStyles.currentMonthlyChargesLegend}>
            <View style={currentMonthChargesStyles.legendContainer}>
              <DotView
                style={{
                  ...currentMonthChargesStyles.dotLegendStyle,
                  backgroundColor: "#38B014"
                }}
              />
              <Text>Selected Day</Text>
            </View>
            <View style={currentMonthChargesStyles.legendContainer}>
              <DotView
                style={{
                  ...currentMonthChargesStyles.dotLegendStyle,
                  backgroundColor: "#1F93F5"
                }}
              />
              <Text>Present Day</Text>
            </View>
            <View style={currentMonthChargesStyles.legendContainer}>
              <DotView
                style={{
                  ...currentMonthChargesStyles.dotLegendStyle,
                  backgroundColor: "#FA5555"
                }}
              />
              <Text>Limit Exceeded</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default CurrentMonthlyChargesFooter;
