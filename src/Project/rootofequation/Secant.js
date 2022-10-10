import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import "./rootof.css";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var arrx = [];
var Xl;
var Xr;
var Xloop = [];
/* eslint no-eval: 0 */
class SecantMethod extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  myFunc() {
    var Funcx = (x) => {
      var fx = eval(document.getElementById("Fx").value);
      // var fx = 43*x-1;
      return fx;
    };
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var fx = eval(document.getElementById("Fx").value);
    var xo = document.getElementById("Xo").value;
    var xn = document.getElementById("Xn").value;
    if (xn !== "" && xo !== "" && fx !== "") {
      var retsol = "<div class='scollbar'><table >";
      var trloop = "<tr ><th style='border:1px solid black;'>Loop</th>";
      var trx = "<tr ></tr><th style='border:1px solid black;'>X</th>";
      var trError = "<tr ></tr><th style='border:1px solid black;'>Error</th>";
      var retans = "";
      var countloop = 0;
      do {
        var x = xn - (Funcx(xn)*(xo-xn))/(Funcx(xo)-Funcx(xn));
        xo=xn;xn = x;
        arrx.push(xn);
        console.log(arrx);
        Xloop.push(countloop);
        // retsol += "<tr style='border:1px solid black;'>";
        trloop +=
          "<td style='border:1px solid black;'>" + ++countloop + "</td>";
        trx +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xn * 100000) / 100000 +
          "</td>";
        trError +=
          "<td style='border:1px solid black;'>" +
          Math.floor((((xn - xo) / xn) * 100) * 1000)/1000 +
          "%</td>";
        // retsol += "</tr>";
        // x = ((xl * Funcx(xr)) - (xr * Funcx(xl))) / (Funcx(xr) - Funcx(xl));
      } while (Math.abs((xn - xo) / xn) * 100 > 0.000001);
      trloop += "</tr>";
      trx += "</tr>";
      trError += "</tr>";
      retsol += trloop + trx + trError + "</table ></div>";
      retans += "Answer is  " + xn;
      document.getElementById("showsolt").innerHTML = retsol;
      document.getElementById("showans").innerHTML = retans;
      showchart.render(
        <div>
          <ApexChart props={[arrx, Xl, Xr, Xloop]} />
        </div>
      );
      // document.getElementById("chart").innerHTML = "";
      arrx = [];
      Xl = [];
      Xr = [];
      Xloop = [];
    } else {
      document.getElementById("showans").innerHTML = "";
      document.getElementById("showsolt").innerHTML =
        "กรุณาป้อนข้อมูลให้ถูกต้อง";
    }
  }

  render() {
    console.log("render");
    return (
      <div className="boxStyles">
        {/* <div className="boxStyles2"> */}
        <div style={{ display: "flex", marginTop: "20px", height: "40%" }}>
          <div className="InputStyles">
            <Form style={{ padding: "20px" }}>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    False Position Method
                  </Form.Label>
                  
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  >
                    <Form.Control
                      id="Xo"
                      type="number"
                      step="1"
                      placeholder="Input X0"
                      style={formstyle}
                    />
                    <Form.Control
                    id="Xn"
                    type="number"
                    step="1"
                    placeholder="Input X1"
                    style={formstyle}
                  />
                  </div>
                  <Form.Control
                    id="Fx"
                    type="text"
                    step="1"
                    placeholder="Input f(x)"
                    style={formstyle}
                  />
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
            <div id="showsolt"  style={{ marginTop: "5%" }}>
              <table class="tablestyle"></table>
            </div>
          </div>
        </div>
        <div id="showchart">
          <ApexChart props={[arrx, Xl, Xr, Xloop]} />
        </div>
      </div>
    );
  }
}

export default SecantMethod;
