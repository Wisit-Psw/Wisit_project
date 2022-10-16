"use strict";

var fx = [[0, 9.81], [20000, 9.7487], [40000, 9.6879], [60000, 9.6879], [80000, 9.5682]];

var L = function L(x, j, arr) {
  var top = 1,
      divide = 1;

  for (var l in arr) {
    if (l !== j) {
      top *= fx[arr[l] - 1][0] - x;
      divide *= fx[arr[l] - 1][0] - fx[arr[j] - 1][0];
    }
  }

  return top / divide;
};

var Fx = function Fx(x, arr) {
  var ans = 0;

  for (var i in arr) {
    ans += fx[arr[i] - 1][1] * L(x, i, arr);
  }

  return ans;
};

console.log("1.1 : " + Fx(42000, [1, 5]));
console.log("1.2 : " + Fx(42000, [1, 3, 5]));
console.log("1.3 : " + Fx(42000, [1, 2, 3, 4, 5]));