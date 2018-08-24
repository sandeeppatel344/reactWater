import React from "react";
import { styles } from "../../stylesheet/style";
import { Image, View } from "react-native";

export const logoHeader = (
  <View style={styles.logoHeaderContainer}>
    <Image
      style={styles.logoHeaderImage}
      resizeMode="stretch"
      source={require("../../assets/launch_icon.png")}
    />
  </View>
);
