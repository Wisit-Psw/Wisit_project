import "antd";
import { React, Component } from "react";
import "./Gauss.css";
var matrix = [];
var matrixAns = [];
var metx = [];
var metxold = [];
var data = {};
export function GaussSeidel_receivedata(pdata) {
  data = pdata;
  matrix = pdata.metrics;
  matrixAns = pdata.metans;
}
class GaussSeidel extends Component {
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
    
    var c = 1;
    var dividevar;
    var count;
    do {
        count = 0;
      retsol += '<table style="margin:0 auto;">';
      for (let i = 0; i < matrix.length; i++) {
        dividevar = matrix[i][i];
        metx[i] = matrixAns[i];
        retsol +=
          "<tr><td>X " +
          (i + 1) +
          c +
          " = </td><td>" +
          Math.floor(metx[i] * 1000) / 1000;
        for (let j = 0; j < matrix[i].length; j++) {
          if (i !== j) {
            retsol += " - (" +
              Math.floor(matrix[i][j] * 1000) / 1000 +
              "*" +
              Math.floor(metx[j] * 1000) / 1000 +
              ")";
            metx[i] -= matrix[i][j] * metx[j];
          }
        }
        retsol += "/" + dividevar + "</td><td> = "+Math.floor(metx[i]*1000)/1000+"</td></tr>";
        metx[i] /= dividevar;
        if(Math.abs((metx[i]-metxold[i])/metx[i])*100<=0.001){count++;}
        metxold[i] = metx[i];
      }
      retsol += "</table><br>";
      c++;
    } while (count !== metx.length);
    var retx='';
    for (let i = 0; i < matrix.length; i++) {
      retx+="x" + (i + 1) + " = " + Math.floor(metx[i]*1000)/1000+"<br>";
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
            <h3> Gauss Seidel Method </h3>
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
                <div id="showans" style={{margin:"0 auto"}}></div>
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
            <div id="showsolv" ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GaussSeidel;
