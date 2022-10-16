var matrix = [[5, 2, 0, 0], [2, 5, 2,0], [0, 2, 5, 2], [0, 0, 2, 5]];
var matrixAns = [12, 17, 14,7];
var metx = [0,0,0,0];
var metxold=metx.slice(),count,dividevar;
do {
    for(let i = 0; i < matrix.length; i++) {
        dividevar = matrix[i][i];
        metx[i]=matrixAns[i];
        for(let j = 0; j < matrix[i].length; j++){
            if(i!==j){
                metx[i]-=(matrix[i][j]*metxold[j]);
            }
        }
        metx[i]/=dividevar;
    }
    count = 0;
    for(let i = 0; i < metx.length; i++) {
        if(Math.abs((metx[i]-metxold[i])/metx[i])*100<=0.001){count++;}
        metxold[i]=metx[i];
    }
}while(count!==metx.length);
for(let i = 0; i < matrix.length; i++) {
    console.log("x"+(i+1)+" = "+metx[i]);
}

