import  "antd";
import {React,Component} from "react";
import './Gauss.css'
var matrix = [];
var matrixAns = [];
var metx = [];
var metxold = [];
const divstyle ={
  margin:'0 0 10% 0'
}
const divstyleinvert ={
  display:'flex',
  marginLeft:'auto',
  marginRight:'auto',
}
class Jacobi extends Component{
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
    //   var matX = [];
      for(let i=0; i<val ;i++){
        matrix.push([]);
        for(let j=0; j<val; j++){ 
          var inputVal = document.getElementById("input"+i+j).value;
          matrix[i].push(inputVal);
          
        }
        var inpuanstVal = document.getElementById("ansinput"+i+'0').value;
        matrixAns.push(inpuanstVal);
        metx.push(0);
        metxold.push(0);
      }
      const printmat = (mat) =>{
        var ret="<div style='margin:20px auto 0 auto;display:flex;'><table style='border-left: 2px solid black;border-right: 2px solid black;'>"
        for(let i=0; i<mat.length; i++){
          ret+="<tr>"
          if(mat[0].length>0){
            for(let j=0; j<mat[0].length; j++){
            ret+="<td style='width:80px;'>"+Math.floor(mat[i][j]*1000)/1000+"</td>"}
          }else{ret+="<td style='width:80px;'>"+Math.floor(mat[i]*1000)/1000+"</td>"}
          
          ret+="</tr>"
        }
        ret+="</table></div>"
        return ret;
      };
      do {
        for(let i = 0; i < matrix.length; i++) {
            var dividevar = matrix[i][i];
            metx[i]=matrixAns[i];
            for(let j = 0; j < matrix[i].length; j++){
                if(i!==j){
                    metx[i]-=(matrix[i][j]*metxold[j]);
                }
            }
            metx[i]/=dividevar;
        }
        var count = 0;
        for(let i = 0; i < metx.length; i++) {
            if(Math.abs((metx[i]-metxold[i])/metx[i])*100<=0.001){count++;}
            metxold[i]=metx[i];
        }
    }while(count!==metx.length);
    for(let i = 0; i < matrix.length; i++) {
        console.log("x"+(i+1)+" = "+metx[i]);
    }
      document.getElementById("showans2").innerHTML= printmat(metx);
      matrix = [];
      matrixAns = [];
      metx = [];
      
    
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
        
          <div style={divstyle}>
            <div>
              <h3> Jacobi Iteration Method </h3>
              <p>Input matrics size <input type="number" step="1"  id="size" onChange={this.CreatmetrimatXnput} style={{width: "30px"}} /></p>
              <form id="myForm" >
              <div id={'ShowText'}></div> <br/>
              <button type="button" class="btn btn-outline-secondary"  onClick={this.myFunc} >Calaulate</button>
              </form>
              <div id="showans"></div>
              <div id="showsolv"></div>
              <div id="showmetx" style={divstyleinvert}></div>
              <div id="showsolv2"></div>
              <div id="showans2"></div>
              
            </div>
          </div>
      );
    }
}

export default Jacobi;
