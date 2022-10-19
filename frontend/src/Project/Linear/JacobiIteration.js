import "antd";
import { React, Component } from "react";
import "./Gauss.css";
var matrix = [];
var matrixAns = [];
var metx = [];
var metxold = [];
var data = {};
export function Jacobi_receivedata(pdata) {
  data = pdata;
  matrix = pdata.metrics;
  matrixAns = pdata.metans;
}
class Jacobi extends Component {
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
    if (matrix.length === 0) {
      for (let i = 0; i < val; i++) {
        matrix.push([]);
        for (let j = 0; j < val; j++) {
          var inputVal = document.getElementById("input" + i + j).value;
          matrix[i].push(inputVal);
        }
        var inpuanstVal = document.getElementById("ansinput" + i + "0").value;
        matrixAns.push(inpuanstVal);
        metx.push(0);
        metxold.push(0);
      }
    } else {
      for (let i = 0; i < val; i++) {
        metx.push(0);
        metxold.push(0);
      }
    }
    console.log(matrix);
    console.log(matrixAns);
    console.log(metx);
    console.log(metxold);
    var count;

    var c = 1;
    do {
      console.log("loop");
      retsol += '<table style="margin:0 auto;">';
      for (let i = 0; i < matrix.length; i++) {
        var dividevar = matrix[i][i];
        metx[i] = matrixAns[i];
        retsol +=
          "<tr><td>X " +
          (i + 1) +
          c +
          " = </td><td>" +
          Math.floor(metx[i] * 1000) / 1000;
        for (let j = 0; j < matrix[i].length; j++) {
          if (i !== j) {
            retsol +=
              " - (" +
              Math.floor(matrix[i][j] * 1000) / 1000 +
              "*" +
              Math.floor(metxold[j] * 1000) / 1000 +
              ")";
              metx[i] -= matrix[i][j] * metxold[j];
          }
        }
        retsol += "/" + dividevar + "</td></tr>";
        metx[i] /= dividevar;
      }
      retsol += "</table><br>";
      c++;
      count = 0;
      console.log(metx.length);
      for (var i = 0; i < metx.length; i++) {
        if (Math.abs((metx[i] - metxold[i]) / metx[i]) * 100 <= 0.001) {
          count++;
          console.log(count);
        }
        metxold[i] = metx[i];
        console.log(metxold[i]);
        console.log(metx[i]);
      }
    } while (count !== metx.length);
    var retx = "";
    for (let i = 0; i < matrix.length; i++) {
      retx += "x" + (i + 1) + " = " + metx[i] + "<br>";
      console.log("x" + (i + 1) + " = " + metx[i]);
    }

    document.getElementById("showsolv").innerHTML = retsol;
    document.getElementById("showans").innerHTML = retx;
    matrix = [];
    matrixAns = [];
    metx = [];
    metxold = [];
  }
  Creatmetrixinput = () => {
    var val = document.getElementById("size").value;
    var ret = "";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ret +=
          '<input type="number" id="input' + i + j + '"  style="width:20px" ';
        if (matrix.length !== 0) {
          ret += 'value = "' + matrix[i][j] + '"';
        }
        ret += ";/> ";
      }
      ret +=
        '| <input type="number" id="ansinput' +
        i +
        '0" style="width:20px;margin-left:10px" ';
      if (matrixAns.length !== 0) {
        ret += ' value = "' + matrixAns[i][0] + '"';
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
            <h3> Jacobi Iteration Method </h3>
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
                <div id="showans" style={{ margin: "0 auto" }}></div>
              </div>
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={this.myFunc}
              >
                Calaulate
              </button>
            </form>
          </div>
          <div id="showlist" class="scroll">
            <div id="showsolv">
              <div>
                <h3>Solution</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jacobi;
