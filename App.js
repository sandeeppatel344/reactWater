import React, { Component } from "react";
import { Provider } from "react-redux";
import stores from "./src/store/reduxStore";
import AppNavigator from "./src/router/routerConfig";

export default class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
