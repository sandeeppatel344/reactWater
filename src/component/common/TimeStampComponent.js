import React, { Component } from "react";
import { Text, Image } from "react-native";
import moment from "moment";

import { styles } from "../../stylesheet/style";
import { Row } from "./Row";

export const TimeStampComponent = () => {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Text style={styles.dateTime}>
        {moment().format("dddd")}
        {", "}
        {moment().format("Do MMMM YYYY")}
      </Text>
      <Image
        style={styles.timeIcon}
        source={require("../../assets/icons/datetime.png")}
      />
    </Row>
  );
};
