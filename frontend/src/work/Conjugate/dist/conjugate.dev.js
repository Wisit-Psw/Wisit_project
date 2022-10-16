"use strict";

//6404062610367 วิสิฐ พูลสวัสดิ์
//--------------Intitialize-----------------
var A = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
var B = [[12], [17], [14], [7]];
var X = [[0], [0], [0], [0]];
var lambda = [];
var alpha = [];
var D = [];
var R = [];
var count = 0; //-----------------create_function----------------------

var printmat = function printmat(mat) {
  var ret = '';

  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[0].length; j++) {
      ret += mat[i][j] + " ";
    }

    console.log(ret);
    ret = '';
  }
};

var plusmat = function plusmat(mat1, mat2) {
  var pmat = [];

  for (var i = 0; i < mat1.length; i++) {
    pmat.push([]);
  }

  for (var _i = 0; _i < mat1.length; _i++) {
    for (var j = 0; j < mat1[0].length; j++) {
      pmat[_i].push(mat1[_i][j] + mat2[_i][j]);
    }
  }

  return pmat;
};

var minusmat = function minusmat(mat1, mat2) {
  var mnmat = [];

  for (var i = 0; i < mat1.length; i++) {
    mnmat.push([]);
  }

  for (var _i2 = 0; _i2 < mat1.length; _i2++) {
    for (var j = 0; j < mat1[0].length; j++) {
      mnmat[_i2].push(mat1[_i2][j] - mat2[_i2][j]);
    }
  }

  return mnmat;
};

var multipymat = function multipymat(mat1, mat2) {
  if (mat1[0].length === mat2.length) {
    var mtpmat = [];

    for (var i = 0; i < mat1.length; i++) {
      mtpmat.push([]);
    }

    var sum = 0;

    for (var _i3 = 0; _i3 < mat1.length; _i3++) {
      for (var j = 0; j < mat2[0].length; j++) {
        for (var k = 0; k < mat1[0].length; k++) {
          sum += mat1[_i3][k] * mat2[k][j];
        }

        mtpmat[_i3].push(sum);

        sum = 0;
      }
    }

    return mtpmat;
  } else {
    console.log("matrics can't multipy");
  }
};

var transpose = function transpose(mat) {
  var tmat = [];

  for (var i = 0; i < mat[0].length; i++) {
    tmat.push([]);

    for (var j = 0; j < mat.length; j++) {
      tmat[i].push(mat[j][i]);
    }
  }

  return tmat;
}; //-------------------test_functions---------------------
// let pmat =plusmat(B,B);
// printmat(pmat);
// let mnmat =minusmat(matX,matrixAns);
// printmat(mnmat);
// let mpt =multipymat(matrix,matrixAns);
// printmat(mpt);
// let tmat =transpose(matrixAns);
// printmat(tmat);
//------------------------step1------------------------


R = minusmat(multipymat(A, X), B); //------------------------step2------------------------

D = multipymat(R, [[-1]]); //------------------------step3------------------------

do {
  var Dt = transpose(D);
  lambda = -1 * (multipymat(Dt, R)[0][0] / multipymat(multipymat(Dt, A), D)[0][0]);
  X = plusmat(X, multipymat(D, [[lambda]]));
  R = minusmat(multipymat(A, X), B);
  var Rt = transpose(R);
  alpha = multipymat(multipymat(Rt, A), D) / multipymat(multipymat(Dt, A), D);
  D = plusmat(multipymat(R, [[-1]]), multipymat(D, [[alpha]]));
  console.log(++count + " ----> Error = " + Math.sqrt(multipymat(transpose(R), R)[0][0]));
} while (Math.sqrt(multipymat(transpose(R), R)[0][0]) >= 0.000001);

printmat(X);