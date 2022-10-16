import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import "./rootof.css";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var data ={
  Xm : [],
  Xloop : [],
  receivedata :{
    Fx:'',
    DFx:''
  }
}
export function Newtonraphson_receivedata(pdata){
  data.receivedata= pdata;
}
class Newtonraphson extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    data.receivedata.Fx = '';
    data.receivedata.DFx = '';
  }

  myFunc() {
    var Funcx = (x) => {
      var strval = document.getElementById("Fx").value;
      var str =''
      for(var i=0; i<strval.length; i++) {
        if(strval[i] !== '^'){str+=strval[i];}
        else{str+='**';}
      }
        fx = eval(str);
      return fx;
    };
    var DFuncx = (x) => {
      var strval = document.getElementById("DFx").value;
      var str =''
      for(var i=0; i<strval.length; i++) {
        if(strval[i] !== '^'){str+=strval[i];}
        else{str+='**';}
      }
        fx = eval(str);
      return fx;
    };
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var fx = document.getElementById("Fx").value;
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
        data.Xm.push(xm);
        xm = xm - Funcx(xm) / DFuncx(xm);
        console.log(xm);
        data.Xloop.push(countloop);
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
          <ApexChart props={[data.Xm,data.Xloop]} />
        </div>
      );
      // document.getElementById("chart").innerHTML = "";
      data.Xm = [];
      data.Xloop = [];
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
                    Newton Raphson
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
                    defaultValue={data.receivedata.Fx}
                    placeholder="Input f(x)"
                    style={formstyle}
                  />
                  <Form.Control
                    id="DFx"
                    type="text"
                    step="1"
                    defaultValue={data.receivedata.DFx}
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
          <ApexChart props={[data.Xm, data.Xloop]} />
        </div>
      </div>
    );
  }
}

export default Newtonraphson;
