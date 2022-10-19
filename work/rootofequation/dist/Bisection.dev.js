"use strict";

// import stringMath from "string-math";
var Rootof = 13;
var root = 4;
var xl = 0;
var xr = Rootof;
var xm = (xl + xr) / 2;

while (Math.abs(Math.pow(xm, root) - Rootof) >= 0.000001) {
  if (Math.pow(xm, root) - Rootof > 0) {
    xr = xm;
  } else {
    xl = xm;
  }

  xm = (xl + xr) / 2;
}

console.log(xm);
console.log(Math.pow(xm, root));