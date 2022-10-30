import { React, Component } from "react";
// var data = {};
// var X = [[1, 0, 2, 3, 4, 2, 1],[0, 1, 4, 2, 1, 3, 6],[1, 3, 1, 2, 5, 3, 4]];
// var Y = [[4, -5, -6, 0, -1, -7, -20]];
var X = [];
var Y = [];
var num = [];
export function MultiLinearReg_receivedata(pdata) {
  //   data = pdata;
  X = pdata.metrics;
  Y = pdata.metans;
}
class MultiLinearReg extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.Createinput();
  }
  myFunc() {
    var val = document.getElementById("size").value;
    var numx = document.getElementById("numx").value;
    for (let i = 0; i < numx; i++) {
      console.log("num" + i)
      num.push(document.getElementById("num" + i).value);
    }
    var retsol = "";
    // var retmet = "";
    if (X.length === 0) {
      for (let i = 0; i < numx; i++) {
        X.push([]);
        if (i === 0) {
          Y.push([]);
        }
        for (let j = 0; j < val; j++) {
          var inputVal = document.getElementById("X" + i + j).value;

          X[i].push(inputVal);
          if (i === 0) {
            var inpuanstVal = document.getElementById("Y" + j + "0").value;
            Y[i].push(inpuanstVal);
          }
        }
      }
    }
    var A = [];
    var B = [];

    for (var i = 0; i <= X.length; i++) {
      A.push([]);
      B.push([]);
      for (var j = 0; j <= X.length; j++) {
        A[i].push(0);
      }
      B[i].push(0);
    }
    const sum = (mat) => {
      var sum = 0;
      for (var i = 0; i < mat.length; i++) {
        sum += mat[i];
      }
      return sum;
    };
    const summultipy = (mat1, mat2) => {
      var sum = 0;
      for (var i = 0; i < mat1.length; i++) {
        sum += mat1[i] * mat2[i];
      }
      return sum;
    };
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
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        if (i === 0 && j === 0) {
          A[i][j] = X[0].length;
        }
        if (i === j && i !== 0) {
          A[i][j] = summultipy(X[i - 1], X[i - 1]);
        }
        if (i === 0 && j !== 0) {
          A[i][j] = sum(X[j - 1]);
          A[j][i] = sum(X[j - 1]);
        }
        if (i !== j && i !== 0 && j !== 0) {
          A[i][j] = summultipy(X[i - 1], X[j - 1]);
          A[j][i] = summultipy(X[i - 1], X[j - 1]);
        }
      }
      if (i === 0) {
        B[i][0] = sum(Y[0]);
      } else {
        B[i][0] = summultipy(X[i - 1], Y[0]);
      }
    }
    retsol+="<div style='display:flex;justify-content: space-around;'><div style='display:flex;justify-content: center;'>A = " + printmat(A)+"</div>"
    retsol+="<div style='display:flex;justify-content: center;'>B = " + printmat(B)+"</div></div><br>"
    retsol+="<p>do Gauss eliminate</p>"
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        var multivar = A[j][i];
        if (i + 1 <= A.length) {
          for (let k = 0; k < A.length; k++) {
            var x = A[j][k] - (A[i][k] / A[i][i]) * multivar;
            A[j][k] = x;
          }
          var y = B[j][0] - (B[i][0] / A[i][i]) * multivar;
          B[j][0] = y;
        }
      }
    }
    retsol+="<div style='display:flex;justify-content: space-around;'><div style='display:flex;'>" + printmat(A)
    retsol+=printmat(B)+"</div></div><br>"
    var a = [];
    for (let j = 0; j < A.length; j++) {
      a.push(null);
    }
    for (let i = A.length - 1; i >= 0; i--) {
      var ans = 0;
      for (let j = A.length - 1; j >= 0; j--) {
        if (a[j] != null && A[i][j] !== 0) {
          B[i][0] = B[i][0] - A[i][j] * a[j];
        } else if (A[i][j] !== 0) {
          ans += B[i][0] / A[i][j];
        }
      }
      a[i] = ans;
    }
    for (let j = 0; j < A.length; j++) {
      retsol+="a" + j + " = " + Math.floor(a[j]*10000)/10000+"<br>";
    }
    ans = 0;
    retsol+="f(";
    for(i in num){
      retsol+=Math.floor(num[i]*10000)/10000
      if(i!==num.length-1){
        retsol+=","
      }
    }
    retsol+=") = "
    for (let j = 0; j < a.length; j++) {
      if (j === 0) {
        ans += a[j];
        retsol+=Math.floor(a[j]*10000)/10000
      } else {
        ans += a[j] * num[j-1];
        retsol+="("+Math.floor(a[j]*10000)/10000+"*"+Math.floor(num[j-1]*10000)/10000+")";
      }
      if(j!==a.length-1){
        retsol+="+"
      }
    }
    
    // console.log(ans);
    document.getElementById("showans").innerHTML = "Ans = " + ans;
    document.getElementById("showsolv").innerHTML = retsol;
    X = [];
    Y = [];
    A = [];
    B = [];
    num=[];
  }

  Createinput = () => {
    var val = document.getElementById("size").value;
    var numx = document.getElementById("numx").value;
    var inputnum='<p>Input number';
    var retx = "";
    var rety = "Y =  ";

    for (let i = 0; i < numx; i++) {
      retx += "X" + i + "= ";
      inputnum += '<input type="number" id="num' + i +'"  style="width:30px;"/> '
      for (let j = 0; j < val; j++) {
        retx += '<input type="number" id="X' + i + j + '"  style="width:20px" ';
        if (X.length !== 0) {
          retx += 'value = "' + X[i][j] + '"';
        }
        retx += ";/> ";
        if (i === 0) {
          rety += ' <input type="number" id="Y' + j + '0" style="width:20px;" ';
          if (Y.length !== 0) {
            rety += ' value = "' + Y[0][j] + '"'; //
          }
          rety += " />";
        }
      }
      retx += "<br>";
    }
    console.log(inputnum)
    if (val) {
      document.getElementById("ShowText").innerHTML = retx + rety;
      document.getElementById("inputnum").innerHTML = inputnum+"</p>";
    }
  };

  render() {
    console.log("render");
    return (
      <div className="boxStyles_li">
        <div style={{ display: "flex", marginTop: "20px", height: "90%" }}>
          <div className="InputStyles_li">
            <h3 style={{ marginTop: "20px" }}> Multiple Linear Regression </h3>
            <p>
              Input number of X{" "}
              <input
                type="number"
                step="1"
                id="numx"
                defaultValue={X.length > 0 ? X.length : ""}
                style={{ width: "30px" }}
              />
            </p>
            <p>
              Input number of data{" "}
              <input
                type="number"
                step="1"
                id="size"
                defaultValue={X[0] !== undefined ? X[0].length : ""}
                onChange={this.Createinput}
                style={{ width: "30px" }}
              />
            </p>
            
            <div id="inputnum">
              <p>
                Input number{" "}
                <input
                  type="number"
                  step="1"
                  id="number"
                  style={{ width: "30px" }}
                />
              </p>
            </div>

            <form id="myForm">
              <div style={{ height: "40vh" }}>
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

export default MultiLinearReg;
