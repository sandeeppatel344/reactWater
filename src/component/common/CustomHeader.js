import React, { Component } from "react";
import { Header, Body, Title } from "native-base";
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#1bafff" }}>
        <Body>
          <Title>Register</Title>
        </Body>
      </Header>
    );
  }
}
