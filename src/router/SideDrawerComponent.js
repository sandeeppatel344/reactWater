import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { routerStyles } from "./routerStyles";
import { Icon } from "native-base";
import { getStorage, handleTextLength } from "../component/utility";

class SideDrawerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserData: ""
    };
  }

  async componentDidMount() {
    this.setState({ currentUserData: await getStorage("currentUser") });
  }

  static defaultProps = {
    userName: "stranger"
  };

  render() {
    const { currentUserData } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={routerStyles.drawLogboardContainer}>
          <View style={routerStyles.drawerLogoBoard}>
            <Image
              style={routerStyles.drawerLogo}
              resizeMode="stretch"
              source={require("../assets/launch_icon.png")}
            />
            <View style={routerStyles.drawerTagRow}>
              <Text style={{ color: "white", marginTop: 10 }}>
                Infinite Water
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.closeDrawer()}
              >
                <View style={{ paddingTop: 5 }}>
                  <Icon
                    name="arrow-back"
                    style={routerStyles.drawerIconBackNav}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={routerStyles.drawerWelcomeBox}>
            <Text style={routerStyles.drawerWelcometxt}>Welcome,   {currentUserData
                ? handleTextLength(
                    currentUserData.authentication.personalProfile.userName,20)
                : null}</Text>
            {/*<Text style={routerStyles.drawerWelcometxt}>
            
            </Text>*/}
          </View>
        </View>

        <SafeAreaView
          style={{ marginTop: 8 }}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <DrawerItems
            {...this.props}
            tintColor="#1bafff"
            activeTintColor="#1bafff"
            inactiveTintColor="#686A6D"
            labelStyle={{ marginLeft: -10 }}
            onItemPress={({ route, focused }) => {
              focused
                ? this.props.navigation.closeDrawer()
                : this.props.onItemPress({ route, focused });
            }}
            focused
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default SideDrawerComponent;
