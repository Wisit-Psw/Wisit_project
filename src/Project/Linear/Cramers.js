import  "antd";
import {React,Component} from "react";
import './Gauss.css'
var matrix = [];
var matrixAns = [];

class Cramers extends Component{
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
      for(let i=0; i<val ;i++){
        matrix.push([]);
        matrixAns.push([]);
        for(let j=0; j<val; j++){ 
          var inputVal = document.getElementById("input"+i+j).value;
          matrix[i].push(inputVal);
        }
        var inpuanstVal = document.getElementById("ansinput"+i+'0').value;
        matrixAns[i].push(inpuanstVal);
      }
      var matX = [];
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
      
      var retx='';
      for (let j = 0; j < matrix.length; j++) {
        for(let i = 0; i < matrix.length; i++) {
            matX[i]= matrix[i].slice();
            matX[i][j]=matrixAns[i];
        }
        retx+="X"+j+" = "+(det(matX)/det(matrix))+" | ";
    }
      matrix = [];
      matrixAns = [];
      document.getElementById("showans").innerHTML= retx;
      document.getElementById("showsolv2").innerHTML= retmet;
      
    }
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

export default Cramers;
