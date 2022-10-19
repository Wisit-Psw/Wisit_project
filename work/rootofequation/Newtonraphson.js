var x = 2;
var xo;
var Fx = x1 =>{
    return Math.pow(x1,2)-7;
}
var DFx = x1 =>{
    return 2*x1;
}
x= x-(Fx(x)/DFx(x));
do{
 xo=x;
 x= x-(Fx(x)/DFx(x));
}while(Math.abs((x-xo)/x)*100>0.000001);
console.log(x);