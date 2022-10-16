import  "antd";
import React,{Component} from "react";
import './Gauss.css'
var metrics = [];
var metans = [];

class GaussElm extends Component{
    constructor(){
      super();
        console.log("constructor");
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    myFunc() {
      var val = document.getElementById("size").value;
      var retsol='';
      var retmet='';
      for(let i=0; i<val ;i++){
        metrics.push([]);
        metans.push([]);
        for(let j=0; j<val; j++){ 
          var inputVal = document.getElementById("input"+i+j).value;
          metrics[i].push(inputVal);
        }
        var inpuanstVal = document.getElementById("ansinput"+i+'0').value;
        metans[i].push(inpuanstVal);
      }
      
      for(let i=0; i<metrics.length; i++) {
        for(let j=0; j<metrics.length; j++) {
          retmet += '|'
          for(let k=0; k<metrics[j].length; k++) {
            retmet += metrics[j][k]+" ";
          }
          retmet += '| ';
          retmet += metans[j][0]+' | --('+(j+1)+')<br>';
        } 
        retmet += '<br>';
        retmet += '---------------------------------------------<br>'
        for(let j=i+1; j<metrics.length; j++){
          //retmet += '|'
          var multivar = metrics[j][i];
            if(i+1<=metrics.length){
              retmet += ' | ';
                for(let k=0; k<metrics.length; k++){
                  retmet += metrics[j][k]+'-(('+metrics[i][k]+'/'+metrics[i][i]+')*'+multivar+')  ';
                  var x = (metrics[j][k]-((metrics[i][k]/metrics[i][i])*multivar));
                    metrics[j][k] = x;
                    
                    retmet += ' | '
                }
                //retmet += '|'
                retmet += ' | '+metans[j][0]+'-(('+metans[i][0]+'/'+metrics[i][i]+')*'+multivar+') ';
                var y = (metans[j][0]-((metans[i][0]/metrics[i][i])*multivar));
                metans[j][0] = y;
                
                retmet += '| --('+(j+1)+')<br>'
                
            }
        }
        retmet += '<br>'
        
    }
    console.log(retsol);
    //document.getElementById("showsolv").innerHTML= retsol;
    var xi=[];
    for(let j=0; j<metrics.length; j++){
        xi.push(null);
    }
    for(let i=metrics.length-1; i>=0; i--) {
      var ans = 0;
        for(let j=metrics.length-1; j>=0; j--){
            if(xi[j]!=null && metrics[i][j]!==0){
                metans[i][0] = metans[i][0]-(metrics[i][j]*xi[j]);
            }else if(metrics[i][j]!==0){
                ans += metans[i][0]/metrics[i][j];
            }
        }
        xi[i]=ans;
    }
    var retx='';
    for(let j=0; j<metrics.length; j++){
        retx += "x"+String(j+1)+" = "+String(xi[j]);
        if(j<metrics.length-1){
          retx+=", "
        }
    }
      metrics = [];
      metans = [];
      document.getElementById("showans").innerHTML= retx;
      document.getElementById("showsolv2").innerHTML= retmet;
      
    }
    
  Creatmetrixinput=val =>{
      val = val.target.value;
      var ret = '';
      document.getElementById("Shownum").innerHTML= val;
      for(let i=0; i<val ;i++){
        for(let j=0; j<val; j++){
          ret+='<input type="number" id="input'+i+j+'"  style="width:20px" ;/> ';}
          ret+='| <input type="number" id="ansinput'+i+'0';
          ret+='"  style="width:20px;margin-left:5px" />';
        ret+= "<br>";}
      document.getElementById("ShowText").innerHTML= ret;}

    render(){
      console.log("render");
      return (
        
          <div>
            <div>
               <input type="number" step="1" placeholder="Input" id="size" onChange={this.Creatmetrixinput} style={{width: "20px"}} />
              {/* input a = new input()               */}
              <h3> Metrix size is <label id={'Shownum'}></label></h3>
              
              <form id="myForm" >
              <div id={'ShowText'}></div> <br/>
              <button type="button"  onClick={this.myFunc} >Submit form</button>
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

export default GaussElm;
