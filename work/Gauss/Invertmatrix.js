var matrix = [[2,3,5],
               [3,1,-2],
               [1,3,4]];
var Invertmat = [[1,0,0],
          [0,1,0],
          [0,0,1]];
var matrixAns = [[0],[-2],[-3]];
const printmet = () =>{
    for(let i=0; i<matrix.length; i++){
        var res="";
        for(let j=0; j<matrix[i].length; j++) {
            res+=Math.floor(matrix[i][j]*1000)/1000+" ";
        }
        res+='|';
        for(let j=0; j<matrix[i].length; j++) {
            res+=Math.floor(Invertmat[i][j]*1000)/1000+" ";
        }
        console.log(res+"\n");
}console.log("\n");}
const multipymat = (mat1,mat2) =>{
    if(mat1[0].length===mat2.length){
        let mtpmat = [];
        for(let i=0; i<mat1.length; i++) {mtpmat.push([]);}
        let sum=0;
        for(let i   = 0; i < mat1.length; i++) {
            for(let j = 0; j < mat2[0].length; j++) {
                for(let k = 0; k < mat1[0].length; k++){
                    sum+=mat1[i][k]*mat2[k][j];
                }
                mtpmat[i].push(sum);
                sum=0;
            }
        }
        return(mtpmat);
    }else{console.log("matrics can't multipy");}
    
};
const printmat = (mat) =>{
    for(let i=0; i<mat.length; i++){
        var res="";
        for(let j=0; j<mat[i].length; j++) {
            res+=Math.floor(mat[i][j]*1000)/1000+" ";
        }
        console.log(res+"\n");
}console.log("\n");}
for(let i=0; i<matrix.length; i++) {
    for(let j=i+1; j<matrix.length; j++){
        var multivar = matrix[j][i];
        if(i+1<=matrix.length){
            for(let k=0; k<matrix.length; k++){
                var x = (matrix[j][k]-((matrix[i][k]/matrix[i][i])*multivar));
                matrix[j][k] = x;
                var y = (Invertmat[j][k]-((Invertmat[i][k]/matrix[i][i])*multivar));
                Invertmat[j][k] = y;
            }
            
        }
    }printmet();
}
for(let i=matrix.length-1; i>=0; i--) {
    for(let j=0; j<i; j++){
        multivar = matrix[j][i];
        if(i+1<=matrix.length){
            for(let k=0; k<matrix.length; k++){
                 x = (matrix[j][k]-((matrix[i][k]/matrix[i][i])*multivar));
                matrix[j][k] = x;
                 y = (Invertmat[j][k]-((Invertmat[i][k]/matrix[i][i])*multivar));
                Invertmat[j][k] = y;
            }
            
        }
    }printmet();
}

for(let i=matrix.length-1; i>=0; i--) {
    var divide = matrix[i][i];
    for(let j=0; j<matrix.length; j++){
        matrix[i][j]/= divide;
        Invertmat[i][j]/= divide;
    }printmet();
}
printmat(multipymat(Invertmat,matrixAns));