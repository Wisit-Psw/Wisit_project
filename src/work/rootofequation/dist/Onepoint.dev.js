"use strict";

//6404062610367 วิสิฐ พูลสวัสดิ์
var xm = 0.1;

function calR(x) {
  var fx = Math.pow(1 / 2 * x, 1 / 2);
  return fx;
}

xm = calR(xm);
var xo;

do {
  xo = xm;
  xm = calR(xm);
} while (Math.abs((xm - xo) / xm * 100) > 0.000001);

console.log(xm);