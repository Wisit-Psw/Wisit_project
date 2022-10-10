import "antd";
import { React, Component } from "react";
import "./Gauss.css";
var matrix = [];
var matrixAns = [];
var Invertmat = [];

const divstyleinvert = {
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
};
class Matrixinvertion extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  myFunc() {
    var val = document.getElementById("size").value;
    //   var retsol='';
    var retmet = "<p>Do Gauss Jordan to fine A Invert</p>";
    var retx = "";
    //   var matX = [];
    for (let i = 0; i < val; i++) {
      matrix.push([]);
      matrixAns.push([]);
      Invertmat.push([]);
      for (let j = 0; j < val; j++) {
        var inputVal = document.getElementById("input" + i + j).value;
        matrix[i].push(inputVal);
        if (i === j) {
          Invertmat[i].push(1);
        } else {
          Invertmat[i].push(0);
        }
      }
      var inpuanstVal = document.getElementById("ansinput" + i + "0").value;
      matrixAns[i].push(inpuanstVal);
    }
    const printmat = (mat) => {
      var ret =
        "<div style='margin:20px auto 0 auto;display:flex;'><h3 >A invert = </h3><table style='border-left: 2px solid black;border-right: 2px solid black;'>";
      for (let i = 0; i < mat.length; i++) {
        ret += "<tr>";
        for (let j = 0; j < mat[0].length; j++) {
          ret +=
            "<td style='width:80px;'>" +
            Math.floor(mat[i][j] * 1000) / 1000 +
            "</td>";
        }
        ret += "</tr>";
      }
      ret += "</table></div>";
      return ret;
    };
    const printsolt = () => {
      var t1 =
        "<table style='border-left: 2px solid black;border-right: 2px solid black;margin-left:auto;margin-right:auto;'><tr>";
      var t2 = "<table style='border-right: 1px solid black;width:200px;'>";
      var t3 = "<table style='width:200px;'>";
      for (let i = 0; i < matrix.length; i++) {
        t2 += "<tr>";
        t3 += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
          t2 += "<td >" + Math.floor(matrix[i][j] * 1000) / 1000 + "</td>";
        }
        for (let j = 0; j < matrix[i].length; j++) {
          t3 += "<td >" + Math.floor(Invertmat[i][j] * 1000) / 1000 + "</td>";
        }
        t2 += "</tr>";
        t3 += "</tr>";
      }
      t2 += "</table >";
      t3 += "</table >";
      t1 += "<td>" + t2 + "</td>";
      t1 += "<td>" + t3 + "</td>";
      t1 += "</tr></table >";
      retmet += t1 + "<br>";
      retmet += "---------------------------------------------<br>";
    };
    const multipymat = (mat1, mat2) => {
      if (mat1[0].length === mat2.length) {
        let mtpmat = [];
        for (let i = 0; i < mat1.length; i++) {
          mtpmat.push([]);
        }
        let sum = 0;
        for (let i = 0; i < mat1.length; i++) {
          for (let j = 0; j < mat2[0].length; j++) {
            for (let k = 0; k < mat1[0].length; k++) {
              sum += mat1[i][k] * mat2[k][j];
            }
            mtpmat[i].push(sum);
            sum = 0;
          }
        }
        return mtpmat;
      } else {
        console.log("matrics can't multipy");
      }
    };
    const printX = (mat) => {
      var res =
        "<table style='width:400px;margin-left:auto;margin-right:auto;'><tr>";
      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
          res +=
            "<td><p>X" +
            (i + 1) +
            " = " +
            Math.floor(mat[i][j] * 1000) / 1000 +
            "</p></td>";
        }
      }
      res += "</tr></table>";
      return res;
    };
    printsolt();
    for (let i = 0; i < matrix.length; i++) {
      retmet +=
        "<table style='width:400px;margin-left:auto;margin-right:auto;'>";
      retmet += "<tr>";
      for (let j = i + 1; j < matrix.length; j++) {
        var multivar = matrix[j][i];
        if (i + 1 <= matrix.length) {
          for (let k = 0; k < matrix.length; k++) {
            retmet +=
              "<td style='width:120PX;'>" +
              Math.floor(matrix[j][k] * 1000) / 1000 +
              "-((" +
              Math.floor(matrix[i][k] * 1000) / 1000 +
              "/" +
              Math.floor(matrix[i][i] * 1000) / 1000 +
              ")*" +
              Math.floor(multivar * 1000) / 1000 +
              ")</td>";
            var x = matrix[j][k] - (matrix[i][k] / matrix[i][i]) * multivar;
            matrix[j][k] = x;
          }
          for (let k = 0; k < matrix.length; k++) {
            retmet +=
              "<td style='width:120PX;'>" +
              Math.floor(Invertmat[j][k] * 1000) / 1000 +
              "-((" +
              Math.floor(Invertmat[i][k] * 1000) / 1000 +
              "/" +
              Math.floor(matrix[i][i] * 1000) / 1000 +
              ")*" +
              Math.floor(multivar * 1000) / 1000 +
              ")</td>";
            var y =
              Invertmat[j][k] - (Invertmat[i][k] / matrix[i][i]) * multivar;
            Invertmat[j][k] = y;
          }
        }
        retmet += "</tr>";
      }
      retmet += "</table><br>";
      printsolt();
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      retmet +=
        "<table style='width:400px;margin-left:auto;margin-right:auto;'>";
      for (let j = 0; j < i; j++) {
        multivar = matrix[j][i];
        if (i + 1 <= matrix.length) {
          retmet += "<tr>";
          for (let k = 0; k < matrix.length; k++) {
            retmet +=
              "<td style='width:120PX;'>" +
              Math.floor(matrix[j][k] * 1000) / 1000 +
              "-((" +
              Math.floor(matrix[i][k] * 1000) / 1000 +
              "/" +
              Math.floor(matrix[i][i] * 1000) / 1000 +
              ")*" +
              Math.floor(multivar * 1000) / 1000 +
              ")</td>";
            x = matrix[j][k] - (matrix[i][k] / matrix[i][i]) * multivar;
            matrix[j][k] = x;
          }
          for (let k = 0; k < matrix.length; k++) {
            retmet +=
              "<td style='width:120PX;'>" +
              Math.floor(Invertmat[j][k] * 1000) / 1000 +
              "-((" +
              Math.floor(Invertmat[i][k] * 1000) / 1000 +
              "/" +
              Math.floor(matrix[i][i] * 1000) / 1000 +
              ")*" +
              Math.floor(multivar * 1000) / 1000 +
              ")</td>";
            y = Invertmat[j][k] - (Invertmat[i][k] / matrix[i][i]) * multivar;
            Invertmat[j][k] = y;
          }
          retmet += "</tr>";
        }
      }
      retmet += " </table><br> ";
      printsolt();
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      var divide = matrix[i][i];
      retmet +=
        "<table style='width:400px;margin-left:auto;margin-right:auto;'>";
      retmet += "<tr>";
      for (let j = 0; j < matrix.length; j++) {
        retmet +=
          "<td style='width:120PX;'>" +
          Math.floor(matrix[i][j] * 1000) / 1000 +
          "/" +
          Math.floor(divide * 1000) / 1000 +
          "</td>";
        matrix[i][j] /= divide;
      }
      for (let j = 0; j < matrix.length; j++) {
        retmet +=
          "<td style='width:120PX;'>" +
          Math.floor(Invertmat[i][j] * 1000) / 1000 +
          "/" +
          Math.floor(divide * 1000) / 1000 +
          "</td>";
        Invertmat[i][j] /= divide;
      }
      retmet += "</tr></table>";
      printsolt();
    }
    retx = printX(multipymat(Invertmat, matrixAns));

    document.getElementById("showans").innerHTML = retx;
    document.getElementById("showsolv").innerHTML = retmet;
    document.getElementById("showInvertmat").innerHTML = printmat(Invertmat);
    document.getElementById("showsolv2").innerHTML =
      "<br><h4>แทนสูตร [A^-1][A]{X}=[A^-1]{B} จะได้</h4>";
    document.getElementById("showans2").innerHTML = "<h5>" + retx + "</h5>";
    matrix = [];
    matrixAns = [];
    Invertmat = [];
  }
  CreatmetrimatXnput = (val) => {
    val = val.target.value;
    var ret = "";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ret +=
          '<input type="number" id="input' +
          i +
          j +
          '"  style="width:30px" ;/> ';
      }
      ret += '| <input type="number" id="ansinput' + i + "0";
      ret += '"  style="width:30px;margin-left:5px" />';
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
            <h3> Matrics Invertion </h3>
            <p>
              Input matrics size{" "}
              <input
                type="number"
                step="1"
                id="size"
                onChange={this.CreatmetrimatXnput}
                style={{ width: "30px" }}
              />
            </p>
            <form id="myForm">
              <div style={{ height: "45vh" }}>
                <div id={"ShowText"}></div> <br />
                <div id="showans"></div>
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
            <div>
              <h3>Solution</h3>
            </div>
            <div id="showsolv" style={{ margin: "0 auto 0 auto" }}></div>
            <div id="showInvertmat" style={divstyleinvert}></div>
            <div id="showsolv2" style={{ margin: "0 auto 0 auto" }}></div>
            <div id="showans2" style={{ margin: "0 auto 0 auto" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Matrixinvertion;
