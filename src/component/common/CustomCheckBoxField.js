import React from "react";
import { View, Text } from "react-native";
import { CheckBox } from "native-base";

class customCheckBoxField extends React.Component {
  state = {
    isChecked: false
  };

  render() {
    const {
      label,
      meta: { touched, error },
      input: { onChange }
    } = this.props;

    return (
      <View>
        <View style={{ left: 6, flexDirection: "row" }}>
          <CheckBox
            color="gray"
            checkboxSize="1"
            style={{ left: 0 }}
            checked={this.state.isChecked}
            onPress={() => {
              onChange(!this.state.isChecked);
              this.setState(prevState => ({
                isChecked: !prevState.isChecked
              }));
            }}
          />

          <View style={{ marginLeft: 20 }}>
            <Text>{label}</Text>
          </View>

          <View style={{ paddingLeft: 7 }}>{this.props.children}</View>
        </View>
        {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
      </View>
    );
  }
}

export { customCheckBoxField };
