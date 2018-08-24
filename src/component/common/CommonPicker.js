import React, { Component } from "react";
import { View, TextInput, Text, Picker } from "react-native";
import { styles } from "../../stylesheet/style";
import { Icon } from "native-base";

export class CommonPicker extends Component {
  render() {
    const {
      label,
      meta: { touched, error },
      children,
      dirty,
      picker_enabled,
      input: { value, onChange }
    } = this.props;

    return (
      <View>
        <View>
          <Text style={styles.customTextLabel}>{label}</Text>
        </View>
        <Picker
          selectedValue={value} //display
          mode="dropdown"
          itemStyle={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
          styles={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
          onValueChange={val => {
            //set value on picker change
            onChange(val);
          }}
          enabled={picker_enabled}
        >
          <Picker.Item label={"Select Month"} value={undefined} />
          {children}
        </Picker>

        {(touched || dirty) &&
          (error && (
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ color: "red", paddingLeft: 5 }}>{error}</Text>
              <Icon
                name={"ios-warning"}
                style={{ fontSize: 18, color: "red" }}
              />
            </View>
          ))}
      </View>
    );
  }
}
