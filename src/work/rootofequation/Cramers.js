var matrix = [[-2,3,1],
[3,4,-5],
[1,-2,1]];
var matrixAns = [9,0,-4];
var matX = [matrixAns.length];
var multipy,index;
const det = met =>{
    var determinant = 0;
    for (let k = 0; k < met.length; k++) { //k=2
        multipy = 1;
        for (let l = 0; l < met.length; l++) { // l=2
            index = k+l; //4
            if (index > met.length-1) {
                index-=met.length;
            }
            multipy *= met[l][index];
        }
        determinant += multipy;
    }
    for (let k = met.length-1; k < (met.length*2)-1; k++) {//4
        multipy = 1;
        for (let l = met.length-1; l >= 0; l--) {//0
            index = k-l; //4
            if (index > met.length-1) {
                index-=met.length;
            }
            if (index < 0) {
                index+=met.length-1;
            }

            multipy *= met[index][l];
        }
        determinant -= multipy;
    }
    return determinant;
};

for (let j = 0; j < matrix.length; j++) {
    for(let i = 0; i < matrix.length; i++) {
        matX[i]= matrix[i].slice();
        matX[i][j]=matrixAns[i];
    }
    // p(matX);
    console.log(det(matX)/det(matrix));
    console.log();
}


