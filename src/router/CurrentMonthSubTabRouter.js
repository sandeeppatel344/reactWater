import { createMaterialTopTabNavigator } from "react-navigation";
import CurrentMonthChargesMonthlyComp from "../component/CurrentMonthCharges/CurrentMonthChargesMonthlyComp";
import CurrentMonthChargesSequential from "../component/CurrentMonthCharges/CurrentMonthlyChargesSequential";

export const TabNavigator = createMaterialTopTabNavigator(
  {
    Comparison: { screen: CurrentMonthChargesMonthlyComp },
    Sequential: { screen: CurrentMonthChargesSequential }
  },
  {
    tabBarOptions: {
      labelStyle: {
        color: "black"
      },
      style: { backgroundColor: "white" }
    }
  }
);
