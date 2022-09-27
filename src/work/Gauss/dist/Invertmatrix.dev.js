"use strict";

var matrix = [[2, 3, 5], [3, 1, -2], [1, 3, 4]];
var Invertmat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
var matrixAns = [[0], [-2], [-3]];

var printmet = function printmet() {
  for (var i = 0; i < matrix.length; i++) {
    var res = "";

    for (var j = 0; j < matrix[i].length; j++) {
      res += Math.floor(matrix[i][j] * 1000) / 1000 + " ";
    }

    res += '|';

    for (var _j = 0; _j < matrix[i].length; _j++) {
      res += Math.floor(Invertmat[i][_j] * 1000) / 1000 + " ";
    }

    console.log(res + "\n");
  }

  console.log("\n");
};

var multipymat = function multipymat(mat1, mat2) {
  if (mat1[0].length === mat2.length) {
    var mtpmat = [];

    for (var i = 0; i < mat1.length; i++) {
      mtpmat.push([]);
    }

    var sum = 0;

    for (var _i = 0; _i < mat1.length; _i++) {
      for (var j = 0; j < mat2[0].length; j++) {
        for (var k = 0; k < mat1[0].length; k++) {
          sum += mat1[_i][k] * mat2[k][j];
        }

        mtpmat[_i].push(sum);

        sum = 0;
      }
    }

    return mtpmat;
  } else {
    console.log("matrics can't multipy");
  }
};

var printmat = function printmat(mat) {
  for (var i = 0; i < mat.length; i++) {
    var res = "";

    for (var j = 0; j < mat[i].length; j++) {
      res += Math.floor(mat[i][j] * 1000) / 1000 + " ";
    }

    console.log(res + "\n");
  }

  console.log("\n");
};

for (var i = 0; i < matrix.length; i++) {
  for (var j = i + 1; j < matrix.length; j++) {
    var multivar = matrix[j][i];

    if (i + 1 <= matrix.length) {
      for (var k = 0; k < matrix.length; k++) {
        var x = matrix[j][k] - matrix[i][k] / matrix[i][i] * multivar;
        matrix[j][k] = x;
        var y = Invertmat[j][k] - Invertmat[i][k] / matrix[i][i] * multivar;
        Invertmat[j][k] = y;
      }
    }
  }

  printmet();
}

for (var _i2 = matrix.length - 1; _i2 >= 0; _i2--) {
  for (var _j2 = 0; _j2 < _i2; _j2++) {
    multivar = matrix[_j2][_i2];

    if (_i2 + 1 <= matrix.length) {
      for (var _k = 0; _k < matrix.length; _k++) {
        x = matrix[_j2][_k] - matrix[_i2][_k] / matrix[_i2][_i2] * multivar;
        matrix[_j2][_k] = x;
        y = Invertmat[_j2][_k] - Invertmat[_i2][_k] / matrix[_i2][_i2] * multivar;
        Invertmat[_j2][_k] = y;
      }
    }
  }

  printmet();
}

for (var _i3 = matrix.length - 1; _i3 >= 0; _i3--) {
  var divide = matrix[_i3][_i3];

  for (var _j3 = 0; _j3 < matrix.length; _j3++) {
    matrix[_i3][_j3] /= divide;
    Invertmat[_i3][_j3] /= divide;
  }

  printmet();
}

printmat(multipymat(Invertmat, matrixAns));