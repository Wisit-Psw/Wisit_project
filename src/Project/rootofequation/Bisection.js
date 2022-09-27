import React,{Component} from "react";

class Bisection extends Component{
    constructor(){
      super();
        console.log("constructor");
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    myFunc() {
      var inputnum = document.getElementById("number").value;
      var inputroot = document.getElementById("rootofnumber").value;
      if(inputnum!=='' && inputroot!==''){
        var retsol="<table style='margin:0 0 10% 30px;border:1px solid black;'><tr ><th style='border:1px solid black;'>loop</th><th style='border:1px solid black;'>Xl</th><th style='border:1px solid black;'>Xr</th><th style='border:1px solid black;'>Xm</th></tr>";
        var retans='';
        const Rootof = inputnum;
        const root = inputroot;
        var xl = 0;
        var xr = Rootof;
        var xm = (xl+xr)/2;
        var count = 0;
        while(Math.abs( Math.pow(xm,root)-Rootof )>=0.000001){
            
            if(Math.pow(xm,root)-Rootof >0){xr=xm;}
            else{xl=xm;}
            xm = (xl+xr)/2;
            retsol+="<tr style='border:1px solid black;'>";
            retsol+= "<td style='border:1px solid black;'>"+ (++count) +"</td>";
            retsol+= "<td style='border:1px solid black;'>"+Math.floor(xl*100000)/100000+"</td>";
            retsol+="<td style='border:1px solid black;'>"+Math.floor(xr*100000)/100000+"</td>";
            retsol+="<td style='border:1px solid black;'>"+Math.floor(xm*100000)/100000+"</td>";
            retsol+="</tr>"
        }
        retsol+='</table >';
        retans+= "root "+root+" of "+Rootof+" = "+xm;
        document.getElementById("showsolt").innerHTML= retsol;
        document.getElementById("showans").innerHTML= retans;}
      else{document.getElementById("showans").innerHTML= '';document.getElementById("showsolt").innerHTML= "กรุณาป้อนข้อมูลให้ถูกต้อง";}
      
    }

    render(){
      console.log("render");
      return (
        
          <div>
            <div>
            <h3> Bisection Method</h3>
            <form id="myForm" >
                
              <p > ป้อนค่าที่ต้องการ  <input type="number" step="1"  id="number"  style={{width: "30px"}} /></p>
              <p > ป้อนรากที่ต้องการ  <input type="number" step="1"  id="rootofnumber"  style={{width: "30px"}} /></p>
              <button type="button"  class="btn btn-outline-secondary" onClick={this.myFunc} >Submit form</button>
              </form>
              <div id="showans"></div>
              <div id="showsolt"></div>
            </div>
          </div>
      );
    }
}

export default Bisection;
