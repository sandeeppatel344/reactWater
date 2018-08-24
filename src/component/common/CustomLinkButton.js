import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const CustomLinkButton = props => {
  const { title, clicked } = props;
  return (
    <TouchableOpacity onPress={clicked}>
      <View style={{ width: "100%" }}>
        <Text style={{ color: "#0099ff", fontSize: 13 }}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

//Custom Link like Reusable Button
