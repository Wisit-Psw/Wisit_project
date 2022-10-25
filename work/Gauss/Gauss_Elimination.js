metrics = [[-2,3,1],
           [3,4,-5],
           [1,-2,1]];
metans = [[9],[0],[-4]];

for(let i=0; i<metrics.length; i++) {
    for(let j=i+1; j<metrics.length; j++){
        multivar = metrics[j][i];
        if(i+1<=metrics.length){
            for(let k=0; k<metrics.length; k++){
                x = (metrics[j][k]-((metrics[i][k]/metrics[i][i])*multivar));
                //console.log(metrics[j][k],metrics[i][k],metrics[i][i],multivar);
                metrics[j][k] = x;
            }
            y = (metans[j][0]-((metans[i][0]/metrics[i][i])*multivar));
            //console.log(metans[j][0],metans[i][0],metrics[i][i],multivar);
            metans[j][0] = y;
        }
    }
}
x=[];
for(let j=0; j<metrics.length; j++){
    x.push(null);
}
for(let i=metrics.length-1; i>=0; i--) {
    ans = 0;
    for(let j=metrics.length-1; j>=0; j--){
        if(x[j]!=null && metrics[i][j]!=0){
            metans[i][0] = metans[i][0]-(metrics[i][j]*x[j]);
        }else if(metrics[i][j]!=0){
            ans += metans[i][0]/metrics[i][j];
        }
    }
    x[i]=ans;
}
for(let j=0; j<metrics.length; j++){
    console.log("x"+String(j+1)+" = "+String(x[j]));
}