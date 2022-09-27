const root = Math.sqrt(2);
var i=1;
//console.log(Math.abs( Math.pow(i,2)-root));
while (Math.abs( Math.pow(i,2)-root)>=0.0000001 ) {
    i+=0.000001;
    // console.log(i);
}
console.log(i);