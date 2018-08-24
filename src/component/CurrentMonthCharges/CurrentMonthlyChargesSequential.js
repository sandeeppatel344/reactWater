import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { CommonActivityIndicator } from "../common";
import { Rupees, checkNetworkConnectivity } from "../utility";
import RefreshComponent from "../../component/common/RefreshComponent";
import { styles } from "../../stylesheet/style";
import { getSequentialData } from "./functions";
import { currentMonthChargesStyles } from "./stylesheet/style";

class CurrentMonthChargesSequential extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      refreshPage: false
    };
  }

  componentWillMount() {
    this.pageLoadHandler();
  }

  pageLoadHandler = () => {
    checkNetworkConnectivity().then(check => {
      if (check) {
        getSequentialData(this.getSequentialData);
      } else {
        this.setState({ refreshPage: true });
      }
    });
  };

  getSequentialData = res => {
    this.setState({ data: res, loading: false, refreshPage: false });
  };
  refreshPageHandler = () => {
    this.pageLoadHandler(); //called on user clicking refresh.
  };

  _renderHeader = () => {
    return (
      <View style={currentMonthChargesStyles.sequantialHeading}>
        <View style={[currentMonthChargesStyles.sequantialRow]}>
          <Text style={currentMonthChargesStyles.sequantialTextColor}>
            Date
          </Text>
        </View>
        <View style={[currentMonthChargesStyles.sequantialRow]}>
          <Text style={currentMonthChargesStyles.sequantialTextColor}>
            Reading (L)
          </Text>
        </View>
        <View style={[currentMonthChargesStyles.sequantialRow]}>
          <Text style={currentMonthChargesStyles.sequantialTextColor}>
            Charges ({Rupees})
          </Text>
        </View>
        <View style={[currentMonthChargesStyles.sequantialRow]}>
          <Text style={currentMonthChargesStyles.sequantialTextColor}>
            Usage (L)
          </Text>
        </View>
      </View>
    );
  };
  _renderItem = ({ item, index }) => (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          currentMonthChargesStyles.sequantialRow,
          index % 2
            ? currentMonthChargesStyles.grayStrip
            : currentMonthChargesStyles.whiteStrip
        ]}
      >
        <Text style={currentMonthChargesStyles.sequantialTextColor}>
          {item.date}
        </Text>
      </View>
      <View
        style={[
          currentMonthChargesStyles.sequantialRow,
          index % 2
            ? currentMonthChargesStyles.grayStrip
            : currentMonthChargesStyles.whiteStrip
        ]}
      >
        <Text style={currentMonthChargesStyles.sequantialTextColor}>
          {item.reading}
        </Text>
      </View>
      <View
        style={[
          currentMonthChargesStyles.sequantialRow,
          index % 2
            ? currentMonthChargesStyles.grayStrip
            : currentMonthChargesStyles.whiteStrip
        ]}
      >
        <Text style={currentMonthChargesStyles.sequantialTextColor}>
          {item.charges}
        </Text>
      </View>
      <View
        style={[
          currentMonthChargesStyles.sequantialRow,
          index % 2
            ? currentMonthChargesStyles.grayStrip
            : currentMonthChargesStyles.whiteStrip
        ]}
      >
        <Text style={currentMonthChargesStyles.sequantialTextColor}>
          {item.daily_consumption}
        </Text>
      </View>
    </View>
  );
  render() {
    if (this.state.loading) {
      if (this.state.refreshPage) {
        return <RefreshComponent onPress={() => this.refreshPageHandler()} />;
      }

      return <CommonActivityIndicator />;
    }
    return (
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
        <FlatList
          data={this.state.data}
          //  extraData={this.state}
          initialNumToRender={24}
          stickyHeaderIndices={[0]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          ListHeaderComponent={this._renderHeader}
        />
      </ScrollView>
    );
  }
}

export default CurrentMonthChargesSequential;
