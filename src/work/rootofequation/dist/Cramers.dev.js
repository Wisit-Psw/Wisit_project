"use strict";

var matrix = [[-2, 3, 1], [3, 4, -5], [1, -2, 1]];
var matrixAns = [9, 0, -4];
var matX = [matrixAns.length];
var multipy, index;

var det = function det(met) {
  var determinant = 0;

  for (var k = 0; k < met.length; k++) {
    //k=2
    multipy = 1;

    for (var l = 0; l < met.length; l++) {
      // l=2
      index = k + l; //4

      if (index > met.length - 1) {
        index -= met.length;
      }

      multipy *= met[l][index];
    }

    determinant += multipy;
  }

  for (var _k = met.length - 1; _k < met.length * 2 - 1; _k++) {
    //4
    multipy = 1;

    for (var _l = met.length - 1; _l >= 0; _l--) {
      //0
      index = _k - _l; //4

      if (index > met.length - 1) {
        index -= met.length;
      }

      if (index < 0) {
        index += met.length - 1;
      }

      multipy *= met[index][_l];
    }

    determinant -= multipy;
  }

  return determinant;
};

for (var j = 0; j < matrix.length; j++) {
  for (var i = 0; i < matrix.length; i++) {
    matX[i] = matrix[i].slice();
    matX[i][j] = matrixAns[i];
  } // p(matX);


  console.log(det(matX) / det(matrix));
  console.log();
}