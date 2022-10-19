num_of_var = 3;
metrics = [[-2,3,1],
           [3,4,-5],
           [1,-2,1]];
metans = [[9],[0],[-4]];

const det = met =>{
    determinant = 0;
    for (let k = 0; k < met.length; k++) {
        multipy = 1;
        for (let l = 0; l < met.length; l++) {
            index = k+l;
            if (index > met.length-1) {
                index-=met.length;
            }

            multipy *= met[l][index];
            //console.log(l,index,met[l][index]);
        }
        determinant += multipy;
    }
    //console.log("--------------------------------");
    for (let k = 2; k < (met.length*2)-1; k++) {
        multipy = 1;
        for (let l = 2; l >= 0; l--) {
            index = k-l;
            if (index > met.length-1) {
                index-=met.length;
            }
            if (index < 0) {
                index+=met.lengt-1;
            }

            multipy *= met[index][l];
            //console.log(met[index][l]);
            //console.log(index,l,met[index][l]);
        }
        determinant -= multipy;
    }
    return determinant;
};

const copymetrics = met => {
    copymet = [];
    for(let i = 0; i < met.length; i++) {
        copymet.push([]);
}
    for(let i = 0; i < met.length; i++) {
            copymet[i] = [...metrics[i]];
        
   }
   return copymet;

};
//console.log( det(metrics));
for (let i = 0; i < num_of_var; i++) {
    cramermet = copymetrics(metrics);
    for (let j = 0; j < num_of_var; j++){
        cramermet[j][i]=metans[j][0];
    }
    console.log("x"+String(i+1)+" = "+String(det(cramermet)/det(metrics)));
}