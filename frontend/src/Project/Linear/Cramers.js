import "antd";
import "./linear.css";
import { React, Component } from "react";
// import "./Gauss.css";/
var data = {};
var matrix = [];
var matrixAns = [];
export function Cramers_receivedata(pdata){
  data=pdata;
  matrix = pdata.metrics
  matrixAns = pdata.metans
}
class Cramers extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.Creatmetrixinput()
    // this.Creatmetrixinput(document.getElementById("size").value);
  }

  myFunc() {
    const printmat = (mat) => {
      var ret =
        "<table style='border-left: 2px solid black;border-right: 2px solid black;'>";
      for (let i = 0; i < mat.length; i++) {
        ret += "<tr>";
        if (mat[0].length > 0) {
          for (let j = 0; j < mat[0].length; j++) {
            ret +=
              "<td style='width:80px;'>" +
              Math.floor(mat[i][j] * 1000) / 1000 +
              "</td>";
          }
        } else {
          ret +=
            "<td style='width:80px;'>" +
            Math.floor(mat[i] * 1000) / 1000 +
            "</td>";
        }

        ret += "</tr>";
      }
      ret += "</table>";
      return ret;
    };
    var val = document.getElementById("size").value;
    var retsol = "";
    var retsolX = "";
    if(matrix.length===0){
    for (let i = 0; i < val; i++) {
      matrix.push([]);
      matrixAns.push([]);
      for (let j = 0; j < val; j++) {
        var inputVal = document.getElementById("input" + i + j).value;
        matrix[i].push(inputVal);
      }
      var inpuanstVal = document.getElementById("ansinput" + i + "0").value;
      matrixAns[i].push(inpuanstVal);
    }
  }
    var matX = [];
    var multipy, index;

    const det = (met) => {
      var determinant = 0;
      for (let k = 0; k < met.length; k++) {
        retsol += "(";
        multipy = 1;
        for (let l = 0; l < met.length; l++) {
          index = k + l;
          if (index > met.length - 1) {
            index -= met.length;
          }
          multipy *= met[l][index];
          retsol += met[l][index];
          if (l !== met.length - 1) {
            retsol += "*";
          }
        }
        retsol += ")";
        if (k !== met.length - 1) {
          retsol += "+";
        } else {
          retsol += "-";
        }
        determinant += multipy;
      }
      for (let k = met.length - 1; k < met.length * 2 - 1; k++) {
        multipy = 1;
        retsol += "(";
        for (let l = met.length - 1; l >= 0; l--) {
          index = k - l;
          if (index > met.length - 1) {
            index -= met.length;
          }
          if (index < 0) {
            index += met.length - 1;
          }
          multipy *= met[index][l];
          retsol += met[l][index];
          if (l !== 0) {
            retsol += "*";
          }
        }
        retsol += ")";
        if (k !== met.length * 2 - 2) {
          retsol += "-";
        }
        determinant -= multipy;
      }
      return determinant;
    };

    for (let j = 0; j < matrix.length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        matX[i] = matrix[i].slice();
        matX[i][j] = matrixAns[i];
      }

      var retx = "<table style='margin:10px auto 0 auto;'>";
      retsolX += "<table style='margin:10px auto 0 auto;'>"
      retsol +=
        "<div style='width:fit-content;display:flex;margin:0 auto;'><table><tr><td>A = </td>";
      retsol += "<td>"+printmat(matrix)+"</td>";
      retsol += "<td>det A = ";
      var dm = det(matrix);
      retsol += " = " + dm + "</td></tr></table></div></div><br>";
      for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix.length; i++) {
          matX[i] = matrix[i].slice();
          matX[i][j] = matrixAns[i];
        }
        retsol +=
          "<div style='width:fit-content;display:flex;margin:0 auto;'><table><tr><td>A" +
          (j + 1) +
          " = </td>";
        retsol += "<td>"+printmat(matX)+"</td>";
        retsol += "<td>det A" + (j + 1) + " = ";
        var dmx = det(matX);
        var xi = Math.floor((dmx / dm) * 10000) / 10000;
        retsolX+="<tr><td>X" +
        j +
        "</td><td> = </td><td>" +
        (Math.floor(dmx  * 10000) / 10000) +"/" +(Math.floor(dm  * 10000) / 10000)+
        "</td><td> = "+xi+" </td></tr>";
        retx +=
          "<tr><td>X" +
          j +
          "</td><td> = </td><td>" +
          xi +
          "</td> </tr>";
        retsol += " = " + dmx + "</td></tr></table></div></div><br>";
      }
      retx += "</table>";
      retsolX += "</table>";
      matrix = [];
      matrixAns = [];
      document.getElementById("showans").innerHTML = retx;
      document.getElementById("showsolv").innerHTML = retsol+retsolX;
    }
  }
  Creatmetrixinput = () => {
    var val = document.getElementById("size").value;
    var ret = "";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ret +=
          '<input type="number" id="input' +
          i +
          j +
          '"  style="width:20px" '
          if(matrix.length!==0){ret += 'value = "' +matrix[i][j]+'"'}
          ret +=';/> ';
      }
      ret += '| <input type="number" id="ansinput' + i + '0" style="width:20px;margin-left:10px" '
      if(matrixAns.length!==0){ret += ' value = "' +matrixAns[i][0]+'"'}
      ret +=' />';
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
            <h3 style={{ marginTop: "20px" }}> CramersRule </h3>
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
                <div id={"ShowText"}></div>
                <div id="showans"></div>
              </div>{" "}
              <br />
              <div>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={this.myFunc}
                >
                  Calaulate
                </button>
              </div>
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

export default Cramers;
