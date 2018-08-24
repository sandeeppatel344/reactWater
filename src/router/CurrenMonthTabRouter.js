import { createMaterialTopTabNavigator } from "react-navigation";
import CurrentMonthChargesScreen from "../component/aggregate/CurrentMonthChargesComponent";
import CurrentMonthChargesGraph from "../component/CurrentMonthCharges/CurrentMonthChargesGraph";

export const CurrentMonthChargesStack = createMaterialTopTabNavigator({
  Table: { screen: CurrentMonthChargesScreen },
  Graph: { screen: CurrentMonthChargesGraph }
});
