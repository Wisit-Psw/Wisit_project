import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./Bisection.css";
import ReactApexChart from "react-apexcharts";
class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Xm",
          data: props.props[0],
        },
        {
          name: "Xl",
          data: props.props[1],
        },
        {
          name: "Xr",
          data: props.props[2],
        },
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
          text: "Page Statistics",
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
          categories: props.props[3],
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
      <div id="chart" class="chart" style={{margin:"0 auto 0 auto"}}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={375}
          width={1000}
        />
      </div>
    );
  }
}
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];
class Bisection extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  myFunc() {
    var inputnum = document.getElementById("number").value;
    var inputroot = document.getElementById("rootofnumber").value;
    if (inputnum !== "" && inputroot !== "") {
      var retsol =
        "<div style='width: 900px;overflow-x: scroll;'><table style='margin:0 auto ;border:1px solid black;'>";
      var trloop = "<tr ><th style='border:1px solid black;'>Loop</th>"
      var trXl = "<tr ></tr><th style='border:1px solid black;'>Xl</th>"
      var trXr =  "<tr ></tr><th style='border:1px solid black;'>Xr</th>"
      var trXm = "<tr ></tr><th style='border:1px solid black;'>Xm</th>"
      var trCheck = "<tr ></tr><th style='border:1px solid black;'>Check</th>"
      var trSet =  "<tr ></tr><th style='border:1px solid black;'>Set new X</th>"
      var retans = "";
      const Rootof = inputnum;
      const root = inputroot;
      var xl = 0;
      var xr = Rootof;
      var xm = (xl + xr) / 2;
      var countloop = 0;
      while (Math.abs(Math.pow(xm, root) - Rootof) >= 0.000001) {
        Xm.push(xm);
        Xl.push(xl);
        Xr.push(xr);
        Xloop.push(countloop);
        xm = (xl + xr) / 2;
        // retsol += "<tr style='border:1px solid black;'>";
        trloop +=
          "<td style='border:1px solid black;'>" + ++countloop + "</td>";
        trXl +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xl * 100000) / 100000 +
          "</td>";
          trXr +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xr * 100000) / 100000 +
          "</td>";
          trXm +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xm * 100000) / 100000 +
          "</td>";
        if (Math.pow(xm, root) - Rootof > 0) {
          xr = xm;
          trCheck +=
            "<td style='border:1px solid black;'>" +
            Math.floor(Math.pow(xm, root) * 1000) / 1000 +
            "-" +
            Rootof +
            ">0</td>";
            trSet += "<td style='border:1px solid black;'>xr=xm</td>";
        } else {
          xl = xm;
          trCheck +=
            "<td style='border:1px solid black;'>" +
            Math.floor(Math.pow(xm, root) * 1000) / 1000 +
            "-" +
            Rootof +
            "<0</td>";
            trSet += "<td style='border:1px solid black;'>xl=xm</td>";
        }
        // retsol += "</tr>";
      }
       trloop += "</tr>"
       trXl += "</tr>"
       trXr += "</tr>"
       trXm += "</tr>"
       trCheck += "</tr>"
       trSet += "</tr>"
      retsol += trloop+trXl+trXr+trXm+trCheck+trSet+"</table ></div>";
      retans += "root " + root + " of " + Rootof + " = " + xm;
      document.getElementById("showsolt").innerHTML = retsol;
      document.getElementById("showans").innerHTML = retans;
      // document.getElementById("chart").innerHTML = "";
      Xm = [];Xl = [];Xr = [];Xloop = [];
    } else {
      document.getElementById("showans").innerHTML = "";
      document.getElementById("showsolt").innerHTML =
        "กรุณาป้อนข้อมูลให้ถูกต้อง";
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <div style={{ display: "flex" ,marginTop:"20px"}}>
          <div className="InputStyles">
            <Form style={{ padding: "20px" }}>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Bisection Method
                  </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  >
                    <Form.Control
                      id="number"
                      type="number"
                      step="1"
                      placeholder="Number"
                      style={formstyle}
                    />
                    <Form.Control
                      id="rootofnumber"
                      type="number"
                      step="1"
                      placeholder="Root of number"
                      style={formstyle}
                    />
                  </div>
                </Form.Group>
                <div id="showans" className="ansStyles"></div>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={this.myFunc}
                >
                  Submit form
                </button>
              </fieldset>
            </Form>
          </div>
          <div>
            
            <div id="showsolt" ></div>
            
          </div>
        </div>
        {/* <iframe  src="" height="400" width="400" title="Iframe Example"></iframe> */}
        
        <div >
          <ApexChart props={[Xm, Xl, Xr, Xloop]}  />
        </div>
      </div>
    );
  }
}

export default Bisection;
