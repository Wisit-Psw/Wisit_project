import React, { Component } from "react";
import ApexChart from './chart';
import Form from "react-bootstrap/Form";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var Xm = [];var Xl = [];var Xr = [];var Xloop = [];
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
        "<br><table style='margin:0 auto ;border:1px solid black;'><tr ><th style='border:1px solid black;'>Loop</th><th style='border:1px solid black;'>Xl</th><th style='border:1px solid black;'>Xr</th><th style='border:1px solid black;'>Xm</th><th style='border:1px solid black;'>Check</th><th style='border:1px solid black;'>Set new X</th></tr>";
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
        retsol += "<tr style='border:1px solid black;'>";
        retsol += "<td style='border:1px solid black;'>" + ++countloop + "</td>";
        retsol +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xl * 100000) / 100000 +
          "</td>";
        retsol +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xr * 100000) / 100000 +
          "</td>";
        retsol +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xm * 100000) / 100000 +
          "</td>";
        if (Math.pow(xm, root) - Rootof > 0) {
          xr = xm;
          retsol +=
            "<td style='border:1px solid black;'>" +
            Math.floor(Math.pow(xm, root) * 1000) / 1000 +
            "-" +
            Rootof +
            ">0</td>";
          retsol += "<td style='border:1px solid black;'>xr=xm</td>";
        } else {
          xl = xm;
          retsol +=
            "<td style='border:1px solid black;'>" +
            Math.floor(Math.pow(xm, root) * 1000) / 1000 +
            "-" +
            Rootof +
            "<0</td>";
          retsol += "<td style='border:1px solid black;'>xl=xm</td>";
        }
        retsol += "</tr>";
      }
      retsol += "</table >";
      retans += "root " + root + " of " + Rootof + " = " + xm;
      document.getElementById("showsolt").innerHTML = retsol;
      document.getElementById("showans").innerHTML = retans;
      // document.getElementById("chart").innerHTML = "";
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
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Disabled input
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  width: "30%",
                  marginLeft: "auto",
                  marginRight: "auto",
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
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={this.myFunc}
            >
              Submit form
            </button>
          </fieldset>
        </Form>
        {/* <div id="chart"></div>/<ReactApexChart options={this.state.options} series={this.state.series} type='line' height={350} /> */}
        <div id="showans"></div>
        <div id="showsolt"></div>
        <div id="showchart"><ApexChart props={[Xm,Xl,Xr,Xloop]}/></div>
      </div>
    );
  }
}

export default Bisection;
