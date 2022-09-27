var x = 2.0;
var xo = 1;
var xn;
var Fx = xf =>{
    return Math.pow(xf,2)-7;
}

do{
    xn = x - (Fx(x)*(xo-x))/(Fx(xo)-Fx(x));
    xo=x;x = xn;
}while(Math.abs((x-xo)/x)*100>=0.000001);
console.log(x);