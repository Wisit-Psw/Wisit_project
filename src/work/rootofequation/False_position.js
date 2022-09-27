//6404062610367 วิสิฐ พูลสวัสดิ์
var xl = 0.02;
var xr = 0.03;

function cal(x) {
  var fx = 9-Math.pow(x, 2);
  return fx;
}

var xm = ((xl * cal(xr)) - (xr * cal(xl))) / (cal(xr) - cal(xl));
var xo;
do {
  xo = xm;
  if (cal(xm) * cal(xr) < 0) {xl = xm;} 
  else {xr = xm;}
  xm = ((xl * cal(xr)) - (xr * cal(xl))) / (cal(xr) - cal(xl));
} while (Math.abs((xm - xo) / xm * 100) > 0.000001);
console.log(xm);