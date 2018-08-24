import React, { Component } from "react";
import { Text, View } from "react-native";

class Cell extends Component {
  render() {
    return (
      <View style={{ width: 75, ...this.props.cellContainerStyle }}>
        <Text
          style={{ textAlign: "center", fontSize: 12, ...this.props.textStyle }}
        >
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default Cell;
