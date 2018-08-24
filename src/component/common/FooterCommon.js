import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "../../stylesheet/style";
import { withNavigation } from "react-navigation";
class FooterCommon extends Component {
  render() {
    return (
      <View style={styles.footerViewContainer}>
        <ImageBackground
          source={require("../../assets/waves.png")}
          imageStyle={styles.footerImageStyle}
          style={styles.footerImageBackground}
          position={"absolute"}
        />
      </View>
    );
  }
}

export default withNavigation(FooterCommon);

//Footer for Register Screen
