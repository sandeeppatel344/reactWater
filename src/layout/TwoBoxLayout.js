import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "../stylesheet/style";

export default class TwoBoxLayout extends Component {
  render() {
    const { box1, box2, box3 } = this.props.style;

    return (
      <View style={styles.container}>
        <View style={{ ...styles.threeBoxLayoutStyle, ...box1 }}>
          {this.props.componentone}
        </View>
        <View style={{ ...styles.threeBoxLayoutStyle, ...box2 }}>
          {this.props.componenttwo}
        </View>
      </View>
    );
  }
}
