import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import "./rootof.css";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];
class FalsePosition extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  
  myFunc() {
    var cal = (x) =>{
        fx = eval(document.getElementById("Fx").value);
        // var fx = 43*x-1;
        return fx;
      }
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var xl = document.getElementById("Xl").value;
    var xr = document.getElementById("Xr").value;
    var fx = document.getElementById("Fx").value;
    if (xl !== "" && xr !== ""&& fx !== "") {
      var retsol = "<div class='scollbar'><table >";
      var trloop = "<tr ><th style='border:1px solid black;'>Loop</th>";
      var trXl = "<tr ></tr><th style='border:1px solid black;'>Xl</th>";
      var trXr = "<tr ></tr><th style='border:1px solid black;'>Xr</th>";
      var trXm = "<tr ></tr><th style='border:1px solid black;'>Xm</th>";
      var trCheck = "<tr ></tr><th style='border:1px solid black;'>Check</th>";
      var trError = "<tr ></tr><th style='border:1px solid black;'>Error</th>";
      var trSet =
        "<tr ></tr><th style='border:1px solid black;'>Set new X</th>";
      var retans = "";
      var xm=0;
      var xo;
      var countloop = 0;
      
      do{
        xo = xm;
        xm = ((xl * cal(xr)) - (xr * cal(xl))) / (cal(xr) - cal(xl));
        Xm.push(xm);
        Xl.push(xl);
        Xr.push(xr);
        Xloop.push(countloop);
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
        var fxn = cal(xm)*cal(xr);
        if (fxn > 0) {
          xr = xm;
          trCheck +=
            "<td style='border:1px solid black;'>" +
            (fxn ) +
            ">0</td>";
          trSet += "<td style='border:1px solid black;'>xr=xm</td>";
        } else {
          xl = xm;
          trCheck +=
            "<td style='border:1px solid black;'>" +
            fxn +
            "<0</td>";
          trSet += "<td style='border:1px solid black;'>xl=xm</td>";
        }
        trError +=
          "<td style='border:1px solid black;'>" +
          Math.floor((Math.abs((xm - xo) / xm) * 100) * 1000) / 1000 +
          "%</td>";
        // retsol += "</tr>";
        // xm = ((xl * cal(xr)) - (xr * cal(xl))) / (cal(xr) - cal(xl));
      }while (Math.abs((xm - xo) / xm * 100) > 0.000001);
      trloop += "</tr>";
      trXl += "</tr>";
      trXr += "</tr>";
      trXm += "</tr>";
      trCheck += "</tr>";
      trError += "</tr>";
      trSet += "</tr>";
      retsol +=
        trloop + trXl + trXr + trXm + trCheck + trSet + trError+"</table ></div>";
      retans += "Answer is  " + xm;
      document.getElementById("showsolt").innerHTML = retsol;
      document.getElementById("showans").innerHTML = retans;
      showchart.render(
        <div>
          <ApexChart props={[Xm, Xl, Xr, Xloop]} />
        </div>
      );
      // document.getElementById("chart").innerHTML = "";
      Xm = [];
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
                      id="Xl"
                      type="number"
                      step="1"
                      placeholder="Input Xl"
                      style={formstyle}
                    />
                    <Form.Control
                      id="Xr"
                      type="number"
                      step="1"
                      placeholder="Input Xr"
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
            <div id="showsolt" class="tablestyle">
              <table class="tablestyle"></table>
            </div>
          </div>
        </div>
        <div id="showchart">
          <ApexChart props={[Xm, Xl, Xr, Xloop]} />
        </div>
      </div>
    );
  }
}

export default FalsePosition;
