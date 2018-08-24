import React from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../stylesheet/style";
import { Icon } from "native-base";

import { Row } from "./Row";

export class commonTextField extends React.Component {
  render() {
    const {
      input,
      refField,
      onEnter,
      maxLength,
      height,
      editable,
      rightIcon,
      label,
      italicLabel,
      multiline,
      numberOfLines,
      placeholder,
      icon_name,
      type,
      passwordField,
      rightIconfn,
      meta: { touched, dirty, error },
      input: { value, onChange }
    } = this.props;

    return (
      <View style={{ marginTop: 15 }}>
        <View style={styles.container}>
          <Row>
            {icon_name ? (
              <Icon name={icon_name} style={{ fontSize: 20 }} />
            ) : null}
            <View style={icon_name && { paddingLeft: 20 }}>
              <Text style={styles.customTextLabel}>{label}</Text>
            </View>
            <Text
              style={{
                fontStyle: "italic",
                fontSize: 13,
                paddingTop: 2,
                color: "#959595"
              }}
            >
              {" "}
              {italicLabel}
            </Text>
          </Row>

          <Row>
            <TextInput
              style={[
                styles.customTextinput,
                rightIcon && { width: "97%" },

                height && { height: height },
                (touched || dirty) && (error && { borderBottomColor: "red" })
              ]}
              onChangeText={value => onChange(value)}
              keyboardType={type}
              secureTextEntry={passwordField}
              value={value}
              multiline={multiline}
              numberOfLines={numberOfLines}
              maxLength={maxLength}
              onFocus={input.onFocus}
              onSubmitEditing={onEnter}
              ref={refField}
              placeholder={placeholder}
              editable={editable}
            />
            {rightIcon && ( //RightIconHelp
              <TouchableOpacity onPress={rightIconfn}>
                {/*   <Icon
                  name={"help-circle"}
                  style={{ fontSize: 18, color: "#686A6D" }}
                />*/}
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 18, width: 18, tintColor: "#686A6D" }}
                />
              </TouchableOpacity>
            )}
          </Row>
        </View>

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
