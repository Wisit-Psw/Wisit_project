"use strict";

metrics = [[-2, 3, 1], [3, 4, -5], [1, -2, 1]];
metans = [[9], [0], [-4]]; // metrics = [[0,0,0,0,0,0,0,0,0,0,0,0],
//            [3,4,-5],
//            [1,-2,1]];
// metans = [[9],[0],[-4]];

var multivar, x, y;

for (var i = 0; i < metrics.length; i++) {
  for (var j = i + 1; j < metrics.length; j++) {
    multivar = metrics[j][i];

    for (var k = 0; k < metrics.length; k++) {
      x = metrics[j][k] - metrics[i][k] / metrics[i][i] * multivar;
      metrics[j][k] = x;
    }

    y = metans[j][0] - metans[i][0] / metrics[i][i] * multivar;
    metans[j][0] = y;
  }
}

x = [];

for (var _j = 0; _j < metrics.length; _j++) {
  x.push(null);
}

var ans;

for (var _i = metrics.length - 1; _i >= 0; _i--) {
  ans = 0;

  for (var _j2 = metrics.length - 1; _j2 >= 0; _j2--) {
    if (x[_j2] != null && metrics[_i][_j2] !== 0) {
      metans[_i][0] = metans[_i][0] - metrics[_i][_j2] * x[_j2]; //-1
    } else if (metrics[_i][_j2] !== 0) {
      ans += metans[_i][0] / metrics[_i][_j2];
    }
  }

  x[_i] = ans;
}

for (var _j3 = 0; _j3 < metrics.length; _j3++) {
  console.log("x" + String(_j3 + 1) + " = " + String(x[_j3]));
}