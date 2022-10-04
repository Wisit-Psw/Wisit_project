"use strict";

var matrix = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
var matrixAns = [12, 17, 14, 7];
var metx = [0, 0, 0, 0];
var metxold = metx.slice(),
    count,
    dividevar;

do {
  for (var i = 0; i < matrix.length; i++) {
    dividevar = matrix[i][i];
    metx[i] = matrixAns[i];

    for (var j = 0; j < matrix[i].length; j++) {
      if (i !== j) {
        metx[i] -= matrix[i][j] * metxold[j];
      }
    }

    metx[i] /= dividevar;
  }

  count = 0;

  for (var _i = 0; _i < metx.length; _i++) {
    if (Math.abs((metx[_i] - metxold[_i]) / metx[_i]) * 100 <= 0.001) {
      count++;
    }

    metxold[_i] = metx[_i];
  }
} while (count !== metx.length);

for (var _i2 = 0; _i2 < matrix.length; _i2++) {
  console.log("x" + (_i2 + 1) + " = " + metx[_i2]);
}