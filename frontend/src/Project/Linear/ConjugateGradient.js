import { React, Component } from "react";
import "./Gauss.css";
var A = [];
var B = [];
var X = [];
var lambda = [];
var alpha = [];
var D = [];
var R = [];
var count = 0;
var data = {};
export function Conjugate_receivedata(pdata) {
  data = pdata;
  A = pdata.metrics;
  B = pdata.metans;
}
class ConjugateGradient extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.Creatmetrixinput();
  }

  myFunc() {
    const printmat = (mat) => {
      var ret =
        "<table style='margin:10px auto;border-left: 2px solid black;border-right: 2px solid black;'>";
      for (let i = 0; i < mat.length; i++) {
        ret += "<tr>";
        for (let j = 0; j < mat[0].length; j++) {
          ret +=
            "<td>" + Math.floor(mat[i][j] * 1000) / 1000 + "</td><td></td>";
        }
        ret += "</tr>";
      }
      ret += "</table>";
      //   console.log(ret);
      return ret;
    };
    const plusmat = (mat1, mat2) => {
      var pmat = [];
      for (let i = 0; i < mat1.length; i++) {
        pmat.push([]);
      }
      for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1[0].length; j++) {
          pmat[i].push(mat1[i][j] + mat2[i][j]);
        }
      }
      return pmat;
    };
    const minusmat = (mat1, mat2) => {
      var mnmat = [];
      for (let i = 0; i < mat1.length; i++) {
        mnmat.push([]);
      }
      for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1[0].length; j++) {
          mnmat[i].push(mat1[i][j] - mat2[i][j]);
        }
      }
      return mnmat;
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
    const transpose = (mat) => {
      let tmat = [];
      for (let i = 0; i < mat[0].length; i++) {
        tmat.push([]);
        for (let j = 0; j < mat.length; j++) {
          tmat[i].push(mat[j][i]);
        }
      }
      return tmat;
    };
    var val = document.getElementById("size").value;
    var retx = "";
    var retmet = "";
    if (A.length === 0) {
      for (let i = 0; i < val; i++) {
        A.push([]);
        B.push([]);
        X.push([]);
        for (let j = 0; j < val; j++) {
          var inputVal = document.getElementById("input" + i + j).value;
          A[i].push(inputVal);
        }
        var inpuanstVal = document.getElementById("ansinput" + i + "0").value;
        B[i].push(inpuanstVal);
        X[i].push(0);
      }
    } else {
      for (let i = 0; i < val; i++) {
        X.push([]);
        X[i].push(0);
      }
    }
    retmet += "<table style='margin:0 auto;'>";
    retmet +=
      "<tr><td>A = </td><td>" +
      printmat(A) +
      "</td><td style='width:20px;'></td>";
    retmet +=
      "<td>B = </td><td>" + printmat(B) + "</td><td style='width:20px;'></td>";
    retmet += "<td>X = </td><td>" + printmat(X) + "</td></tr>";
    retmet += "</table>";
    R = minusmat(multipymat(A, X), B);
    retmet +=
      "<table style='margin:0 auto;'><tr><td>R<sub>0</sub> = [A]{X}-{B} = </td><td>" +
      printmat(R) +
      "</td><td style='width:20px;'></td>";
    //------------------------step2------------------------
    D = multipymat(R, [[-1]]);
    retmet +=
      "<td>D<sub>0</sub> = -{R0} = </td><td>" +
      printmat(D) +
      "</td></tr></table>";
    //------------------------step3------------------------
    retmet +=
      "------------------------------------------loop------------------------------------------";
    do {
      var Dt = transpose(D);
      //   retmet+="<table style='margin:0 auto;'><tr><td>⌊D⌋ = </td><td>"+printmat(Dt)+"</td></tr></table>";
      retmet +=
        "<table style='margin:0 auto;'><tr><td>λ = -⌊D⌋{R}/⌊D⌋[A]{D} = </td></tr></table><table style='margin:0 auto;'><tr>";
      retmet +=
        "<td> <label style='font-size: 20px;'>-(</label ></td><td style='width:10px;'></td><td>" +
        printmat(Dt) +
        " </td><td style='width:20px;'></td><td> " +
        printmat(R) +
        " </td><td style='width:10px;'></td><td><label style='font-size: 20px;'>) / (</label ></td><td style='width:10px;'></td><td>" +
        printmat(Dt) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(A) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(D) +
        "</td><td style='width:10px;'></td><td><label style='font-size: 20px;'>) = </label ></td>";

      lambda =
        -1 * (multipymat(Dt, R)[0][0] / multipymat(multipymat(Dt, A), D)[0][0]);
      retmet +=
        "<td>" + Math.floor(lambda * 1000) / 1000 + "</td></tr></table>";
      X = plusmat(X, multipymat(D, [[lambda]]));
      R = minusmat(multipymat(A, X), B);
      var Rt = transpose(R);
      retmet +=
        "<table style='margin:0 auto;'><tr><td>α = ⌊R⌋[A]{D}/⌊D⌋[A]{D} = </td></tr></table><table style='margin:0 auto;'><tr>";
      retmet +=
        "<td> <label style='font-size: 20px;'>-(</label ></td><td style='width:10px;'></td><td>" +
        printmat(Rt) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(A) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(D) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(D) +
        "</td><td style='width:10px;'></td><td><label style='font-size: 20px;'>) = </label ></td>";
      alpha =
        multipymat(multipymat(Rt, A), D) / multipymat(multipymat(Dt, A), D);
      retmet += "<td>" + Math.floor(alpha * 1000) / 1000 + "</td></tr></table>";
      retmet +=
        "<table style='margin:0 auto;'><tr><td>D<sub>n</sub> = -{R} + α {D} = </td>";
      retmet +=
        "<td> <label style='font-size: 20px;'>-</label ></td><td style='width:10px;'></td><td>" +
        printmat(R) +
        "</td><td><label style='font-size: 20px;'>+</label ></td><td>" +
        printmat(A) +
        "</td><td style='width:20px;'></td><td>" +
        printmat(D) +
        "</td><td> = </td><td> ";
      D = plusmat(multipymat(R, [[-1]]), multipymat(D, [[alpha]]));
      retmet += printmat(D) + "</td></tr></table>";
      retmet +=
        "<table style='margin:0 auto;'><tr><td>Error = &#8730 ⌊R⌋[R] = </td>";
      retmet +=
        "<td> <label style='font-size: 20px;'>&#8730</label ></td><td style='width:10px;'></td><td>" +
        printmat(Rt) +
        "</td><td>" +
        printmat(R) +
        "</td><td> = ";
      console.log(
        ++count +
          " ----> Error = " +
          Math.sqrt(multipymat(transpose(R), R)[0][0])
      );
      retmet +=
        Math.floor(Math.sqrt(multipymat(transpose(R), R)[0][0]) * 1000) / 1000 +
        "</tr></table>";
      retmet +=
        "-----------------------------------------loop " +
        count +
        "-----------------------------------------";
    } while (Math.sqrt(multipymat(transpose(R), R)[0][0]) >= 0.000001);
    printmat(X);

    for (let i = 0; i < X.length; i++) {
      retx += "x" + (i + 1) + " = " + Math.floor(X[i] * 1000) / 1000 + "<br>";
      console.log("x" + (i + 1) + " = " + X[i]);
    }
    document.getElementById("showans").innerHTML = retx;
    document.getElementById("showsolv").innerHTML = retmet;
    X = [];
    lambda = [];
    alpha = [];
    D = [];
    R = [];
  }

  Creatmetrixinput = () => {
    var val = document.getElementById("size").value;
    var ret = "";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ret +=
          '<input type="number" id="input' + i + j + '"  style="width:20px" ';
        if (A.length !== 0) {
          ret += 'value = "' + A[i][j] + '"';
        }
        ret += ";/> ";
      }
      ret +=
        '| <input type="number" id="ansinput' +
        i +
        '0" style="width:20px;margin-left:10px" ';
      if (B.length !== 0) {
        ret += ' value = "' + B[i][0] + '"';
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
            <h3 style={{ marginTop: "20px" }}> Conjugate Gradient</h3>
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

export default ConjugateGradient;
