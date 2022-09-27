var metrics = [[5, 2, 0, 0], [2, 5, 2,0], [0, 2, 5, 2], [0, 0, 2, 5]];
var metans = [12, 17, 14,7];
var metx = [0,0,0,0];
var metxold=metx.slice(),count,dividevar,n = 0;
do {
    for(let i = 0; i < metrics.length; i++) {
        dividevar = metrics[i][i];
        metx[i]=metans[i];
        for(let j = 0; j < metrics[i].length; j++){
            if(i!==j){
                metx[i]-=(metrics[i][j]*metxold[j]);
            }
        }
        metx[i]/=dividevar;
    }
    count = 0;
    for(let i = 0; i < metx.length; i++) {
        if(Math.abs((metx[i]-metxold[i])/metx[i])*100<=0.001){count++;}
        metxold[i]=metx[i];
    }
    
    console.log(++n);
}while(count!==metx.length);
for(let i = 0; i < metrics.length; i++) {
    console.log("x"+(i+1)+" = "+metx[i]);
}

