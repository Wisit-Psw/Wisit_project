import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import "./rootof.css";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var x = [];
var Xl;
var Xr;
var Xloop = [];
class Newtonraphson extends Component {
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
    var DFuncx = (x) => {
      var fx = eval(document.getElementById("DFx").value);
      // var fx = 43*x-1;
      return fx;
    };
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var fx = eval(document.getElementById("Fx").value);
    var xm = document.getElementById("X").value;
    if (xm !== "" && fx !== "") {
      var retsol = "<div class='scollbar'><table >";
      var trloop = "<tr ><th style='border:1px solid black;'>Loop</th>";
      var trx = "<tr ></tr><th style='border:1px solid black;'>X</th>";
      var trError = "<tr ></tr><th style='border:1px solid black;'>Error</th>";
      var retans = "";
      var xo;
      var countloop = 0;
      do {
        xo = xm;
        x.push(xm);
        xm = xm - Funcx(xm) / DFuncx(xm);
        console.log(xm);
        Xloop.push(countloop);
        // retsol += "<tr style='border:1px solid black;'>";
        trloop +=
          "<td style='border:1px solid black;'>" + ++countloop + "</td>";
        trx +=
          "<td style='border:1px solid black;'>" +
          Math.floor(xm * 100000) / 100000 +
          "</td>";
        trError +=
          "<td style='border:1px solid black;'>" +
          Math.floor((((xm - xo) / xm) * 100) * 1000)/1000 +
          "%</td>";
        // retsol += "</tr>";
        // x = ((xl * Funcx(xr)) - (xr * Funcx(xl))) / (Funcx(xr) - Funcx(xl));
      } while (Math.abs((xm - xo) / xm) * 100 > 0.000001);
      trloop += "</tr>";
      trx += "</tr>";
      trError += "</tr>";
      retsol += trloop + trx + trError + "</table ></div>";
      retans += "Answer is  " + xm;
      document.getElementById("showsolt").innerHTML = retsol;
      document.getElementById("showans").innerHTML = retans;
      showchart.render(
        <div>
          <ApexChart props={[x, Xl, Xr, Xloop]} />
        </div>
      );
      // document.getElementById("chart").innerHTML = "";
      x = [];
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
                  <Form.Control
                      id="X"
                      type="number"
                      step="1"
                      placeholder="Input X"
                      style={formstyle}
                    />
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  >
                    <Form.Control
                    id="Fx"
                    type="text"
                    step="1"
                    placeholder="Input f(x)"
                    style={formstyle}
                  />
                  <Form.Control
                    id="DFx"
                    type="text"
                    step="1"
                    placeholder="Input f'(x)"
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
            <div id="showsolt" class="tablestyle" style={{ marginTop: "5%" }}>
              <table class="tablestyle"></table>
            </div>
          </div>
        </div>
        <div id="showchart">
          <ApexChart props={[x, Xl, Xr, Xloop]} />
        </div>
      </div>
    );
  }
}

export default Newtonraphson;
