import React from "react";
import { TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../stylesheet/style";

export const LinearGradientButton = props => {
  const { clicked, title, disable } = props;
  let colorArray = disable
    ? ["rgba(135,206,250,0.7)", "rgba(73,91,254,0.7)"]
    : ["#1bafff", "#495bfe"];
  return (
    <LinearGradient
      colors={colorArray}
      start={{ x: 0.3, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.linearGradientButton}
    >
      <TouchableOpacity
        disabled={disable}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.7
        }}
        onPress={clicked}
      >
        <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
