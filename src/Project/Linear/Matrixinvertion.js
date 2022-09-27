import  "antd";
import {React,Component} from "react";
import './Gauss.css'
var matrix = [];
var matrixAns = [];
var Invertmat = [];
class Matrixinvertion extends Component{
    constructor(){
      super();
        console.log("constructor");
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    myFunc() {
      var val = document.getElementById("size").value;
    //   var retsol='';
      var retmet='';
      var retx='';
    //   var matX = [];
      for(let i=0; i<val ;i++){
        matrix.push([]);
        matrixAns.push([]);
        Invertmat.push([]);
        for(let j=0; j<val; j++){ 
          var inputVal = document.getElementById("input"+i+j).value;
          matrix[i].push(inputVal);
          if(i===j){Invertmat[i].push(1);}
          else{Invertmat[i].push(0);}
        }
        var inpuanstVal = document.getElementById("ansinput"+i+'0').value;
        matrixAns[i].push(inpuanstVal);
      }
      const printmet = () =>{
        var t1="<table style='border-left: 2px solid black;border-right: 2px solid black;'><tr>";
        var t2="<table style='border-right: 1px solid black;width:200px;'>";
        var t3="<table style='width:200px;'>";
        for(let i=0; i<matrix.length; i++){
            t2+="<tr>";
            t3+="<tr>";
            for(let j=0; j<matrix[i].length; j++) {
                t2+="<td >"+Math.floor(matrix[i][j]*1000)/1000+"</td>";
            }
            for(let j=0; j<matrix[i].length; j++) {
                t3+="<td >"+Math.floor(Invertmat[i][j]*1000)/1000+"</td>";
            }
            t2+="</tr>";
            t3+="</tr>";
    }
    t2+='</table >';
    t3+='</table >';
    t1+="<td>"+t2+"</td>";
    t1+="<td>"+t3+"</td>";
    t1+='</tr></table >';
    retmet+=t1+"<br>";retmet += '---------------------------------------------<br>'}
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
            console.log(res+"\n");}
            }
    // printmat(matrix);
    // printmat(matrixAns);
    // printmat(Invertmat);
    printmet();
    for(let i=0; i<matrix.length; i++) {
        for(let j=i+1; j<matrix.length; j++){
            var multivar = matrix[j][i];
            if(i+1<=matrix.length){
                for(let k=0; k<matrix.length; k++){
                    retmet+=" | ";
                    retmet += Math.floor(matrix[j][k]*1000)/1000+'-(('+Math.floor(matrix[i][k]*1000)/1000+'/'+Math.floor(matrix[i][i]*1000)/1000+')*'+Math.floor(multivar*1000)/1000+')  ';
                    var x = (matrix[j][k]-((matrix[i][k]/matrix[i][i])*multivar));
                    matrix[j][k] = x;
                }
                retmet+=" | ";
                for(let k=0; k<matrix.length; k++){
                    retmet+=" | ";
                    retmet += Math.floor(Invertmat[j][k]*1000)/1000+'-(('+Math.floor(Invertmat[i][k]*1000)/1000+'/'+Math.floor(matrix[i][i]*1000)/1000+')*'+Math.floor(multivar*1000)/1000+')  ';
                    var y = (Invertmat[j][k]-((Invertmat[i][k]/matrix[i][i])*multivar));
                    Invertmat[j][k] = y;
                }
                retmet+=" | ";
                retmet+=" <br> ";
                
            }
        }printmet();
    }
    for(let i=matrix.length-1; i>=0; i--) {
        for(let j=0; j<i; j++){
            multivar = matrix[j][i];
            if(i+1<=matrix.length){
                for(let k=0; k<matrix.length; k++){
                    retmet+=" | ";
                    retmet += Math.floor(matrix[j][k]*1000)/1000+'-(('+Math.floor(matrix[i][k]*1000)/1000+'/'+Math.floor(matrix[i][i]*1000)/1000+')*'+Math.floor(multivar*1000)/1000+')  ';
                     x = (matrix[j][k]-((matrix[i][k]/matrix[i][i])*multivar));
                    matrix[j][k] = x;
                }
                retmet+=" | ";
                for(let k=0; k<matrix.length; k++){
                    retmet+=" | ";
                    retmet += Math.floor(Invertmat[j][k]*1000)/1000+'-(('+Math.floor(Invertmat[i][k]*1000)/1000+'/'+Math.floor(matrix[i][i]*1000)/1000+')*'+Math.floor(multivar*1000)/1000+')  ';
                    y = (Invertmat[j][k]-((Invertmat[i][k]/matrix[i][i])*multivar));
                   Invertmat[j][k] = y;
               }
               retmet+=" | ";
               retmet+=" <br> ";
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
    
      matrix = [];
      matrixAns = [];
      Invertmat = [];
      document.getElementById("showans").innerHTML= retx;
      document.getElementById("showsolv2").innerHTML= retmet;
      
    
}
  CreatmetrimatXnput=val =>{
      val = val.target.value;
      var ret = '';
      
      for(let i=0; i<val ;i++){
        for(let j=0; j<val; j++){
          ret+='<input type="number" id="input'+i+j+'"  style="width:30px" ;/> ';}
          ret+='| <input type="number" id="ansinput'+i+'0';
          ret+='"  style="width:30px;margin-left:5px" />';
        ret+= "<br>";}
      document.getElementById("ShowText").innerHTML= ret;}

    render(){
      console.log("render");
      return (
        
          <div>
            <div>
               
              {/* input a = new input()               */}
              <h3> CramersRule </h3>
              <p>Input matrics size <input type="number" step="1"  id="size" onChange={this.CreatmetrimatXnput} style={{width: "30px"}} /></p>
              <form id="myForm" >
              <div id={'ShowText'}></div> <br/>
              <button type="button" class="btn btn-outline-secondary"  onClick={this.myFunc} >Calaulate</button>
              </form>
              <div id="showlist"></div>
              <div id="showans"></div>
              <div id="showsolv"></div>
              <div id="showsolv2"></div>
              
            </div>
          </div>
      );
    }
}

export default Matrixinvertion;
