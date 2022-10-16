"use strict";

//6404062610367 วิสิฐ พูลสวัสดิ์
var xl = 0;
var xr = 1;

function cal(x) {
  var fx = 43 * x - 1;
  return fx;
} // var xm = ((xl * cal(xr)) - (xr * cal(xl))) / (cal(xr) - cal(xl));


var xm = 0;
var xo;

do {
  xo = xm;
  xm = (xl * cal(xr) - xr * cal(xl)) / (cal(xr) - cal(xl));
  console.log(xl, xr, xm);

  if (cal(xm) * cal(xr) < 0) {
    xl = xm;
  } else {
    xr = xm;
  }

  console.log(xl, xr, xm, Math.abs((xm - xo) / xm * 100));
} while (Math.abs((xm - xo) / xm * 100) > 0.000001);

console.log(xl, xr, xm);