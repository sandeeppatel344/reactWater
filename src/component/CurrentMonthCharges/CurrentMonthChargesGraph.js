import React, { Component } from "react";
import { View, Image } from "react-native";
import { getCurrentMonthReading } from "./functions";
import { redMarkPoint, blueMarkPoint } from "../../assets/chartMarkPoint";
import Echarts from "native-echarts";
import moment from "moment";
import { CommonActivityIndicator } from "../common";

class CurrentMonthChargesGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      xAxisData: null,
      readings: null,
      charges: null
    };
  }

  componentWillMount() {
    getCurrentMonthReading(this.currentMonthdataHandler); //get Graph Data
  }

  currentMonthdataHandler = res => {
    var dates = res.map((data, i) => {
      return moment(data.date, "DD/MM/YY").format("D"); //get Date array
    });

    var readings = res.map((data, i) => {
      return data.reading; //get readings array
    });

    var charges = res.map((data, i) => {
      return data.charges; //get charges array
    });

    this.setState({
      data: res,
      xAxisData: dates,
      readings: readings,
      charges: charges
    });
  };

  render() {
    var currentDate = moment().format("D"); //get Current Date from momentjs

    const option = {
      calculable: true,
      tooltip: [{ trigger: "axis" }],
      xAxis: [
        {
          type: "category",
          axisLine: { onZero: true },

          boundaryGap: false,
          axisLabel: {
            formatter: "{value}"
          },
          data: this.state.xAxisData //Array of dates
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: { onZero: false },
          axisLabel: {
            formatter: "{value} "
          },
          boundaryGap: false
        }
      ],

      visualMap: [
        {
          show: false,

          seriesIndex: 0,
          dimension: 0,

          showLabel: false,
          pieces: [
            {
              gt: 0,
              lte: parseInt(currentDate) - 1,
              color: "#94D1F2",
              label: "current month"
            },
            {
              gt: parseInt(currentDate) - 1,
              color: "#260E9D",
              label: "Forecast"
            }
          ]
        },

        {
          show: false,

          seriesIndex: 1,
          dimension: 0,
          showLabel: false,
          pieces: [
            {
              gt: 0,
              lte: parseInt(currentDate) - 1,
              color: "#ff5452",
              label: "current months"
            },
            {
              gt: parseInt(currentDate) - 1,
              color: "#F7931F",
              label: "Forecasts"
            }
          ]
        }
      ],

      series: [
        {
          name: "Consumption",

          type: "line",
          smooth: true,

          markPoint: {
            symbol: blueMarkPoint,

            symbolSize: 30,
            symbolOffset: [0, "8%"],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                name: "Current Day",

                value: this.state.readings[parseInt(currentDate) - 1],

                xAxis: currentDate,
                yAxis: this.state.readings[parseInt(currentDate) - 1]
              }
            ]
          },
          data: this.state.readings
        },
        {
          name: "Charges",

          type: "line",
          smooth: true,

          markPoint: {
            symbol: redMarkPoint,
            symbolSize: 30,
            symbolOffset: [0, "-15%"],
            label: {
              normal: {
                show: false
              }
            },

            data: [
              {
                name: "Current Day",

                value: this.state.charges[parseInt(currentDate - 1)],

                xAxis: currentDate,
                yAxis: parseInt(this.state.charges[parseInt(currentDate) - 1])
              }
            ]
          },
          data: this.state.charges
        }
      ]
    };

    if (this.state.data === null) {
      return <CommonActivityIndicator />;
    }

    return (
      <View style={{ flex: 1 }}>
        <Echarts option={option} height={380} width={400} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../../assets/lengendBottom.jpg")}
            style={{ height: 60, width: "100%" }}
          />
        </View>
      </View>
    );
  }
}
export default CurrentMonthChargesGraph;
