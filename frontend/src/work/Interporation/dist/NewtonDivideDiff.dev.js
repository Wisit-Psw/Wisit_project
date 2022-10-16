"use strict";

var fx1 = [[0, 9.81], [80000, 9.5682]];
var fx2 = [[0, 9.81], [40000, 9.6879], [80000, 9.5682]];
var fx3 = [[0, 9.81], [20000, 9.7487], [40000, 9.6879], [60000, 9.6879], [80000, 9.5682]];

var C = function C(x2, x1, fx) {
  if (x2 === 0 && x1 === 0) {
    return fx[x1][1];
  } else if (x2 - x1 > 1) {
    return (C(x2, x1 + 1, fx) - C(x2 - 1, x1, fx)) / (fx[x2][0] - fx[x1][0]);
  } else {
    return (fx[x2][1] - fx[x1][1]) / (fx[x2][0] - fx[x1][0]);
  }
};

var Fx = function Fx(x, fx) {
  var Ans = 0;

  for (var i = 0; i < fx.length; i++) {
    var c = C(i, 0, fx);

    for (var j = 0; j < i; j++) {
      c *= x - fx[j][0];
    }

    Ans += c;
  }

  return Ans;
};

console.log("1.1 : " + Fx(42000, fx1));
console.log("1.2 : " + Fx(42000, fx2));
console.log("1.3 : " + Fx(42000, fx3));