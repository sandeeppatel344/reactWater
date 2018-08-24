import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "../../stylesheet/style";

export class CommonActivityIndicator extends Component {
  render() {
    return (
      <View style={styles.commonActivityStyle}>
        <ActivityIndicator size="large" color={"#1bafff"} />
      </View>
    );
  }
}
