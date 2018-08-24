import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../../stylesheet/style";
import { Icon } from "native-base";

export const MenuButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigate.openDrawer()}>
        <Icon name="menu" style={styles.HamburgerMenuButton} />
      </TouchableOpacity>
    </View>
  );
};

//Defines the Hamburger Icons to the header left
