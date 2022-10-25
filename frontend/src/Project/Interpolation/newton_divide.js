import { React, Component } from "react";
// var data = {};
var fx = [];
// var fx = [[0,9.81],[20000,9.7487],[40000,9.6879],[60000,9.6879],[80000,9.5682]];
export function NewtonDivided_receivedata(pdata) {
  fx = pdata.metrics;
}
class NewtonDivided extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.Createinput();
  }
  myFunc() {
    var val = document.getElementById("size").value;
    var num = document.getElementById("number").value;
    if (fx.length === 0) {
            for(let j = 0; j < val; j++) {
                fx.push([])
                fx[j].push( document.getElementById("fx" + j + "0").value)
                fx[j].push( document.getElementById("fy"+j+"0").value)
            }
      }
    // var retsol = "";
    // var retmet = "";
    var C = (x2,x1,fx) =>{
        if(x2===0&&x1===0){return Number(fx[x1][1]);}
        else if(x2-x1>1){
            return Number(C(x2,(x1+1),fx)-C((x2-1),x1,fx))/(fx[x2][0]-fx[x1][0]); }
        else{
            return Number(fx[x2][1]-fx[x1][1])/(fx[x2][0]-fx[x1][0]);}
    }
    var Fx= (x,fx) =>{
        var Ans=0;
        for(var i=0;i<fx.length;i++){ 
            var c = C(i,0,fx);
            for(let j=0; j<i ; j++){
                c*=(x-fx[j][0]);
            }
            Ans+=c;
        } return Ans;
    };
    
    document.getElementById("showans").innerHTML = "Ans = "+Fx(num,fx);
    // document.getElementById("showsolv").innerHTML = retmet;
    fx = [];
  }

  Createinput = () => {
    var val = document.getElementById("size").value;
    var retx = "";
    var rety = "Y =  ";

      retx += "X = ";
      for (let j = 0; j < val; j++) {
        retx += '<input type="number" id="fx' + j + '0"  style="width:20px" ';
        if (fx.length !== 0) {
          retx += 'value = "' + fx[j][0] + '"';
        }
        retx += ";/> ";
          rety += ' <input type="number" id="fy' + j + '0" style="width:20px;" ';
          if (fx.length !== 0) {
            rety += ' value = "' + fx[j][1] + '"';
          }
          rety += " />";
      }
      retx += "<br>";
    if (val) {
      document.getElementById("ShowText").innerHTML = retx + rety;
    }
  };

  render() {
    console.log("render");
    return (
      <div className="boxStyles_li">
        <div style={{ display: "flex", marginTop: "20px", height: "90%" }}>
          <div className="InputStyles_li">
            <h3 style={{ marginTop: "20px" }}> Newton Divided  </h3>
            <p>
              Input number of data{" "}
              <input
                type="number"
                step="1"
                id="size"
                defaultValue={fx.length !== 0 ? fx.length : ""}
                onChange={this.Createinput}
                style={{ width: "30px" }}
              />
            </p>
            <p>
              Input number{" "}
              <input
                type="number"
                step="1"
                id="number"
                style={{ width: "30px" }}
              />
            </p>
            <form id="myForm">
              <div style={{ height: "45vh" }}>
                <div id={"ShowText"}></div> <br />
                <div id="showans"></div>
              </div>{" "}
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={this.myFunc}
              >
                Submit form
              </button>
            </form>
          </div>
          <div id="showlist" class="scroll">
            <div>
              <h3>Solution</h3>
            </div>
            <div id="showsolv" style={{ margin: "0 auto 0 auto" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewtonDivided;
