import React from "react";
import { styles } from "../../stylesheet/style";

import { View } from "react-native";

export const Row = props => {
  return (
    <View style={{ ...styles.rowLayoutStyle, ...props.style }}>
      {props.children}
    </View>
  );
};
