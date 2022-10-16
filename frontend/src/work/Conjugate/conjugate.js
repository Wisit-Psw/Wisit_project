//6404062610367 วิสิฐ พูลสวัสดิ์
//--------------Intitialize-----------------
var A = [[5,2,0,0],
              [2,5,2,0],
              [0,2,5,2],
              [0,0,2,5]];
var B = [[12],[17],[14],[7]];
var X = [[0],[0],[0],[0]];
var lambda=[];
var alpha = [];
var D = [];
var R = [];
var count =0;
//-----------------create_function----------------------
const printmat = mat =>{
    var ret = '';
    for(let i=0; i<mat.length; i++) {
        for(let j=0; j< mat[0].length; j++){
            ret += mat[i][j]+" ";
        }
        console.log(ret);
        ret='';
    }
};
const plusmat = (mat1,mat2) => {
    var pmat =[];
    for(let i=0; i<mat1.length; i++) {pmat.push([]);}
    for(let i=0; i<mat1.length ; i++) {
        for(let j=0;j< mat1[0].length; j++) {
            pmat[i].push(mat1[i][j]+mat2[i][j]);
        }
    }
    return pmat;
};
const minusmat = (mat1,mat2) => {
    var mnmat =[];
    for(let i=0; i<mat1.length; i++) {mnmat.push([]);}
    for(let i=0; i<mat1.length ; i++) {
        for(let j=0;j< mat1[0].length; j++) {
            mnmat[i].push(mat1[i][j]-mat2[i][j]);
        }
    }
    return mnmat;
};
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
const transpose = mat => {
    let  tmat = [];
    for(let i=0; i<mat[0].length; i++) { 
        tmat.push([]);
        for(let j=0; j< mat.length; j++) {
            tmat[i].push(mat[j][i]);
        }
    }
    return tmat;
}
//-------------------test_functions---------------------
// let pmat =plusmat(B,B);
// printmat(pmat);
// let mnmat =minusmat(matX,matrixAns);
// printmat(mnmat);
// let mpt =multipymat(matrix,matrixAns);
// printmat(mpt);
// let tmat =transpose(matrixAns);
// printmat(tmat);
//------------------------step1------------------------
R = minusmat(multipymat(A,X),B);
//------------------------step2------------------------
D = multipymat(R,[[-1]]);
//------------------------step3------------------------
do{
    var Dt =transpose(D);
    lambda=-1*((multipymat(Dt,R))[0][0]/(multipymat(multipymat(Dt,A),D))[0][0]);
    X = plusmat(X,multipymat(D,[[lambda]]));
    R = minusmat(multipymat(A,X),B);
    var Rt = transpose(R);
    alpha = (multipymat(multipymat(Rt,A),D))/(multipymat(multipymat(Dt,A),D));
    D = plusmat(multipymat(R,[[-1]]),multipymat(D,[[alpha]]));
    console.log (++count+" ----> Error = " +Math.sqrt(multipymat(transpose(R),R)[0][0]));
   
}while(Math.sqrt(multipymat(transpose(R),R)[0][0])>=0.000001);
printmat(X);