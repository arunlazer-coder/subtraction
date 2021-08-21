import React, { Component } from "react";
import Chart from "react-apexcharts";
export default class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "add",
          data: [4, 5, 8, 4, 7, 9, 10],
        },
        {
          name: "sub",
          data: [3, 7, 8, 8, 9, 7, 3],
        },
        {
          name: "div",
          data: [1, 2, 3, 4, 5, 6, 3],
        },
        {
          name: "mul",
          data: [4, 2, 8, 7, 2, 1, 0],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "date",
          categories: [
           "Mon",
           "Tue",
           "wed",
           "Thus",
           "Fri",
           "Sat",
           "Sun"
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}
