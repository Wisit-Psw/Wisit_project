import React, { Component } from "react";
// import * as ReactDOM from "react-dom";
import "./rootof.css";
import ReactApexChart from "react-apexcharts";
class ApexChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [
          {
            name: "Xm",
            data: props.props[0],
          }
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [5, 7, 5],
            curve: "straight",
            dashArray: [0, 8, 5],
          },
          title: {
            text: "value",
            align: "left",
          },
          legend: {
            tooltipHoverFormatter: function (val, opts) {
              return (
                val +
                " - " +
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                ""
              );
            },
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6,
            },
          },
          xaxis: {
            categories: props.props[1],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  },
                },
              },
            ],
          },
          grid: {
            borderColor: "#f1f1f1",
          },
        },
      };
    }
  
    render() {
      return (
        <div id="chart" class="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={250}
            width={1250}
          />
        </div>
      );
    }
  }
  export default ApexChart;