import { React, Component } from "react";
import "./Gauss.css";
var data = {};
var metrics = [];
var metans = [];
export function GaussElm_receivedata(pdata) {
  data = pdata;
  metrics = pdata.metrics;
  metans = pdata.metans;
}
class GaussElm extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.Creatmetrixinput();
  }

  myFunc() {
    var val = document.getElementById("size").value;
    var retsol = "";
    var retmet = "";
    if (metrics.length === 0) {
      for (let i = 0; i < val; i++) {
        metrics.push([]);
        metans.push([]);
        for (let j = 0; j < val; j++) {
          var inputVal = document.getElementById("input" + i + j).value;
          metrics[i].push(inputVal);
        }
        var inpuanstVal = document.getElementById("ansinput" + i + "0").value;
        metans[i].push(inpuanstVal);
      }
    }
    for (let i = 0; i < metrics.length; i++) {
      retmet +=
        "<table style='width:50%;margin:10px auto;border-left: 2px solid black;border-right: 2px solid black;'>";
      for (let j = 0; j < metrics.length; j++) {
        retmet += "<tr>";
        for (let k = 0; k < metrics[j].length; k++) {
          retmet +=
            "<td style='text-align:center;'>" +
            Math.floor(metrics[j][k] * 10000) / 10000 +
            "</td>";
        }
        // retmet += "| ";
        retmet +=
          "<td style='text-align:center;border-left: 2px solid black;'>" +
          Math.floor(metans[j][0] * 10000) / 10000 +
          " </td></tr> ";
      }
      retmet += "</table >";
      retmet += "---------------------------------------------<br>";
      retmet +=
        "<table style='width:50%;margin:10px auto;border-left: 2px solid black;border-right: 2px solid black;'>";
      for (let j = i + 1; j < metrics.length; j++) {
        //retmet += '|'
        var multivar = metrics[j][i];
        if (i + 1 <= metrics.length) {
          retmet += "<tr>";
          for (let k = 0; k < metrics.length; k++) {
            retmet +=
              "<td style='text-align:center;'>" +
              Math.floor(metrics[j][k] * 10000) / 10000 +
              "-((" +
              Math.floor(metrics[i][k] * 10000) / 10000 +
              "/" +
              Math.floor(metrics[i][i] * 10000) / 10000 +
              ")*" +
              Math.floor(multivar * 10000) / 10000 +
              ")  ";
            var x = metrics[j][k] - (metrics[i][k] / metrics[i][i]) * multivar;
            metrics[j][k] = x;

            retmet += "</td>";
          }
          //retmet += '|'
          retmet +=
            " <td style='text-align:center;; border-left: 2px solid black;'>" +
            Math.floor(metans[j][0] * 10000) / 10000 +
            "-((" +
            Math.floor(metans[i][0] * 10000) / 10000 +
            "/" +
            Math.floor(metrics[i][i] * 10000) / 10000 +
            ")*" +
            Math.floor(multivar * 10000) / 10000 +
            ") ";
          var y = metans[j][0] - (metans[i][0] / metrics[i][i]) * multivar;
          metans[j][0] = y;

          retmet += "</td></tr>";
        }
      }
      retmet += "<br>";
    }
    console.log(retsol);
    //document.getElementById("showsolv").innerHTML= retsol;
    var xi = [];
    for (let j = 0; j < metrics.length; j++) {
      xi.push(null);
    }
    for (let i = metrics.length - 1; i >= 0; i--) {
      var ans = 0;
      for (let j = metrics.length - 1; j >= 0; j--) {
        if (xi[j] != null && metrics[i][j] !== 0) {
          metans[i][0] = metans[i][0] - metrics[i][j] * xi[j];
        } else if (metrics[i][j] !== 0) {
          ans += metans[i][0] / metrics[i][j];
        }
      }
      xi[i] = ans;
    }
    var retx = "<table style='margin:0 auto;'>";
    for (let j = 0; j < metrics.length; j++) {
      retx +=
        "<tr><td style='text-align:center;'>x" +
        (j + 1) +
        " = " +
        Math.floor(xi[j] * 10000) / 10000 +
        "</td></tr>";
    }
    retx += "</table>";
    metrics = [];
    metans = [];
    document.getElementById("showans").innerHTML = retx;
    document.getElementById("showsolv").innerHTML = retmet;
  }

  Creatmetrixinput = () => {
    var val = document.getElementById("size").value;
    var ret = "";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ret +=
          '<input type="number" id="input' + i + j + '"  style="width:20px" ';
        if (metrics.length !== 0) {
          ret += 'value = "' + metrics[i][j] + '"';
        }
        ret += ";/> ";
      }
      ret +=
        '| <input type="number" id="ansinput' +
        i +
        '0" style="width:20px;margin-left:10px" ';
      if (metans.length !== 0) {
        ret += ' value = "' + metans[i][0] + '"';
      }
      ret += " />";
      ret += "<br>";
    }
    document.getElementById("ShowText").innerHTML = ret;
  };

  render() {
    console.log("render");
    return (
      <div className="boxStyles_li">
        <div style={{ display: "flex", marginTop: "20px", height: "90%" }}>
          <div className="InputStyles_li">
            <h3 style={{ marginTop: "20px" }}> Gauss Elmination Method </h3>
            <p>
              Input matrics size{" "}
              <input
                type="number"
                step="1"
                id="size"
                defaultValue={data.size}
                onChange={this.Creatmetrixinput}
                style={{ width: "30px" }}
              />
            </p>
            <form id="myForm">
              <div style={{ height: "45vh" }}>
                <div id={"ShowText"}></div> <br />
                <div id="showans"></div>
              </div>{" "}
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={this.myFunc}
              >
                Submit form
              </button>
            </form>
          </div>
          <div id="showlist" class="scroll">
            <div>
              <h3>Solution</h3>
            </div>
            <div id="showsolv" style={{ margin: "0 auto 0 auto" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GaussElm;
