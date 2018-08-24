import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class RefreshComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Please turn on your Network and press refresh</Text>
        <View style={{ width: 80 }}>
          <Button title={"Refresh"} onPress={this.props.onPress} />
        </View>
      </View>
    );
  }
}

export default RefreshComponent;
