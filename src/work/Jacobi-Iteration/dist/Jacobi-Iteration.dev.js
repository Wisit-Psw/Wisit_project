"use strict";

var metrics = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
var metans = [12, 17, 14, 7];
var metx = [0, 0, 0, 0];
var metxold = metx.slice();
var count;
var dividevar;
var n = 0;

do {
  for (var i = 0; i < metrics.length; i++) {
    dividevar = metrics[i][i];
    metx[i] = metans[i];

    for (var j = 0; j < metrics[i].length; j++) {
      if (i !== j) {
        metx[i] -= metrics[i][j] * metxold[j];
      }
    }

    metx[i] /= dividevar;
  }

  count = 0;

  for (var _i = 0; _i < metx.length; _i++) {
    if (Math.abs((metx[_i] - metxold[_i]) / metx[_i]) * 100 <= 0.001) {
      count++;
    } //console.log(Math.abs((metx[i]-metxold[i])/metx[i])*100+"----------");
    //console.log(metx[i]+" "+metxold[i]);


    metxold[_i] = metx[_i];
  }

  console.log(++n);
} while (count !== metx.length);

for (var _i2 = 0; _i2 < metrics.length; _i2++) {
  console.log("x" + (_i2 + 1) + " = " + metx[_i2]);
}