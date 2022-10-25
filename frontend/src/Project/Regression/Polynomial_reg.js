import { React, Component } from "react";
// var data = {};
// var X = [[10, 15, 20, 30, 40, 50, 60, 70, 80]];
// var Y = [[5, 9, 15, 18, 22, 30, 35, 38, 43]];
  var X = [];
  var Y = [];
export function PolynomialReg_receivedata(pdata) {
//   data = pdata;
  X = pdata.metrics;
  Y = pdata.metans;
}
class PolynomialReg extends Component {
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
    var M = document.getElementById("order").value;
    var num = document.getElementById("number").value;
    // var retsol = "";
    // var retmet = "";
    if (X.length === 0) {
      for (let i = 0; i < 1; i++) {
        X.push([]);
        if(i===0){Y.push([]);}
        for (let j = 0; j < val; j++) {
          var inputVal = document.getElementById("X" + i + j).value;
          
          X[i].push(inputVal);
          if(i===0){var inpuanstVal = document.getElementById("Y" + i + j).value;Y[i].push(inpuanstVal);}
        }
      }
    }  
    var A = [];
    var B = [];
    const expo = (mat, expo) => {
        var exposum = [];
        for (var i = 0; i < mat.length; i++) {
            exposum.push(mat[i] ** expo);
        }
        return exposum;
    }
    for (var i = 2; i <= M; i++) {
        X.push(expo(X[0],i));
    }
    for (let i = 0; i <= X.length; i++) {
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
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
       var  multivar = A[j][i];
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
      console.log("a" + String(j) + " = " + String(a[j]));
    }
    ans = 0;
    for (let j = 0; j < a.length; j++) {
        ans += a[j] * (num**j);
    }
    console.log(X) ;
    console.log(Y) ;

    document.getElementById("showans").innerHTML = "Ans = "+ans;
    // document.getElementById("showsolv").innerHTML = retmet;
    X = [];
    Y = [];
  }

  Createinput = () => {
    var val = document.getElementById("size").value;
    var retx = "";
    var rety = "Y =  ";

    for (let i = 0; i < 1; i++) {
      retx +=
          'X = ';
      for (let j = 0; j < val; j++) {
        retx +=
          '<input type="number" id="X' + i + j + '"  style="width:20px" ';
        if (X.length !== 0) {
          retx += 'value = "' + X[i][j] + '"';
        }
        retx += ";/> ";
        if(i===0){
          rety +=
          ' <input type="number" id="Y' +
          i + j + '" style="width:20px;" ';
        if (Y.length !== 0) {
          rety += ' value = "' + Y[i][j] + '"';
        }
        rety += " />";
        }
        
      }
      retx +=
          '<br>';
    }
    if(val){document.getElementById("ShowText").innerHTML = retx+rety;}
    
  };

  render() {
    console.log("render");
    return (
      <div className="boxStyles_li">
        <div style={{ display: "flex", marginTop: "20px", height: "90%" }}>
          <div className="InputStyles_li">
            <h3 style={{ marginTop: "20px" }}> Polynomial Regression </h3>
            <p>
              Input number of data{" "}
              <input
                type="number"
                step="1"
                id="size"
                defaultValue={X[0]!==undefined? X[0].length:""}
                onChange={this.Createinput}
                style={{ width: "30px" }}
              />
            </p>
            <p>
              Input number of order{" "}
              <input
                type="number"
                step="1"
                id="order"
                style={{ width: "30px" }}
              />
            </p>
            <p>
              Input number{" "}
              <input
                type="number"
                step="1"
                id="number"
                style={{ width: "30px" }}
              />
            </p>
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

export default PolynomialReg;
