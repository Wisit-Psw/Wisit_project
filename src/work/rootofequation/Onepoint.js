//6404062610367 วิสิฐ พูลสวัสดิ์
var xm=0.0;
function calR(x) {
  var fx = 2*Math.pow(x,2);
  return fx;
}


xm = calR(xm);
var xo;
do {
  xo = xm;
  xm = calR(xm);
} while (Math.abs((xm - xo) / xm * 100) > 0.000001);

console.log(xm);