
import React, { Component } from "react";
import axios from "axios";
import { MathComponent } from "mathjax-react";
import { Link } from "react-router-dom";
import { Bisrection_receivedata } from "./rootofequation/Bisection";
import { FalsePosition_receivedata} from "./rootofequation/FalsePosition";
import { Onepoint_receivedata} from "./rootofequation/Onepoint";
import { Newtonraphson_receivedata } from "./rootofequation/Newtonraphson";
import { SecantMethod_receivedata } from "./rootofequation/Secant";
import { Cramers_receivedata } from "./Linear/Cramers";
import { GaussElm_receivedata } from "./Linear/GaussElm";
import {Matrixinvertion_receivedata}from "./Linear/Matrixinvertion";
import {Jacobi_receivedata}from "./Linear/JacobiIteration"
import {GaussSeidel_receivedata}from "./Linear/GaussSeidel"
import {Conjugate_receivedata}from "./Linear/ConjugateGradient";
import { NewtonDivided_receivedata } from "./Interpolation/newton_divide";
import { Lagrange_receivedata } from "./Interpolation/Lagrange";
import { LinearReg_receivedata } from "./Regression/Linear_reg";
import { PolynomialReg_receivedata } from "./Regression/Polynomial_reg";
import { MultiLinearReg_receivedata } from "./Regression/MultiLinear_reg";

var chap={
  1001:Bisrection_receivedata,
  1002:FalsePosition_receivedata,
  1003:Onepoint_receivedata,
  1004:Newtonraphson_receivedata,
  1005:SecantMethod_receivedata,
  2001:Cramers_receivedata,
  2002:GaussElm_receivedata,
  2003:Matrixinvertion_receivedata,
  2004:Jacobi_receivedata,
  2005:GaussSeidel_receivedata,
  2006:Conjugate_receivedata,
  3001:NewtonDivided_receivedata,
  3002:Lagrange_receivedata,
  4001:LinearReg_receivedata,
  4002:PolynomialReg_receivedata,
  4003:MultiLinearReg_receivedata,
};
class Getapi extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const result = await axios.get(this.props.url+this.props.chap);
    this.setState({ data: result.data });
  }
  printmat = (mat) => {
    var ret =
      "<table style='border-left: 2px solid black;border-right: 2px solid black;margin:10px auto;'>";
    for (let i = 0; i < mat.length; i++) {
      ret += "<tr>";
      if (mat[0].length > 0) {
        for (let j = 0; j < mat[0].length; j++) {
          ret +=
            "<td style='width:20px;'>" +
            Math.floor(mat[i][j] * 1000) / 1000 +
            "</td>";
        }
      } else {
        ret +=
          "<td style='width:20px;'>" +
          Math.floor(mat[i] * 1000) / 1000 +
          "</td>";
      }
      ret += "</tr>";
    }
    ret += "</table>";
    return ret;
  };
  printmat2 = (mat) => {
    var ret =
      "<table style='border-left: 2px solid black;border-right: 2px solid black;margin:0 auto;'>";
    for (let i = 0; i < mat.length; i++) {
      ret += "<tr>";
      if (mat[0].length > 0) {
        for (let j = 0; j < mat[0].length; j++) {
          ret +=
            "<td style='width:20px;'>" +
            Math.floor(mat[i][j] * 1000) / 1000 +
            "</td>";
        }
      } else {
        ret +=
          "<td style='width:20px;'>" +
          Math.floor(mat[i] * 1000) / 1000 +
          "</td>";
      }
      ret += "</tr>";
    }
    ret += "</table>";
    return ret;
  };
  Linear_str = (row) =>{
    var ret = "<table><tr>";
    ret+= "<td>"+this.printmat(row.metrics)+"</td>";
    ret+= "<td>"+this.printmat(row.metans)+"</td>";
    ret += "</tr></table>"
    return ret;
  }
  Linear_str2 = (row) =>{
    var ret = "<table><tr>";
    ret+= "<td>"+this.printmat(row.metrics)+"</td>";
    ret += "</tr></table>"
    return ret;
  }
  Linear_str3 = (row) =>{
    var ret = "<table>";
    ret+= "<tr ><td> <div style='display:flex;'> X : "+this.printmat2(row.metrics)+"</div></td></tr>";
    ret+= "<tr ><td> <div style='display:flex;'> Y : "+this.printmat2(row.metans)+"</div></td></tr>";
    ret += "</table>"
    return ret;
  }
  textCondition(row) {
    if(this.props.chap==='1001'){return ["/Bisection",<MathComponent tex={String("^" + row.root + "\\sqrt" + row.number)} />]}
    else if(this.props.chap==='1002'){return ["/FalsePosition",<MathComponent tex={String(row.Fx)} />]}
    else if(this.props.chap==='1003'){return ["/Onepoint",<MathComponent tex={String(row.Fx)} />]}
    else if(this.props.chap==='1004'){return ["/Newtonraphson",<MathComponent tex={String(row.Fx)} />]}
    else if(this.props.chap==='1005'){return ["/SecantMethod",<MathComponent tex={String(row.Fx)} />]}
    else if(this.props.chap==='2001'){return ["/CramersRules",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='2002'){return ["/GaussElm",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='2003'){return ["/Matrixinvertion",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='2004'){return ["/Jacobi",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='2005'){return ["/GaussSeidel",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='2006'){return ["/Conjugate",<div dangerouslySetInnerHTML={{ __html:this.Linear_str(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='3001'){return ["/Newton_Div",<div dangerouslySetInnerHTML={{ __html:this.Linear_str2(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='3002'){return ["/Lagrange",<div dangerouslySetInnerHTML={{ __html:this.Linear_str2(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='4001'){return ["/Linear_Reg",<div dangerouslySetInnerHTML={{ __html:this.Linear_str3(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='4002'){return ["/Polynomial_Reg",<div dangerouslySetInnerHTML={{ __html:this.Linear_str3(row)}} style={{margin:'auto'}}></div>]}
    else if(this.props.chap==='4003'){return ["/MultiLinear_Reg",<div dangerouslySetInnerHTML={{ __html:this.Linear_str3(row)}} style={{margin:'auto'}}></div>]}
    else {return ['','']}
  }
  render() {
    // console.log(chap)
    return(
      <div>
      {this.state.data.map((row) => (
      <Link
        to={this.textCondition(row)[0]}
        onClick={() =>
          chap[this.props.chap](row)
        }
      >
       {this.textCondition(row)[1] }
      </Link>
    ))}
    </div>)
    
  }
}

export default Getapi;

// import React, { useState, useEffect } from "react";
// import { MathComponent } from "mathjax-react";
// import { Link } from "react-router-dom";
// import { Bisrection_receivedata } from "./rootofequation/Bisection";
// import { FalsePosition_receivedata } from "./rootofequation/FalsePosition";
// // import { Onepoint_receivedata } from "./rootofequation/Onepoint";
// // import { Newtonraphson_receivedata } from "./rootofequation/Newtonraphson";
// // import { SecantMethod_receivedata } from "./rootofequation/Secant";

// export default function Getapi() {
//   // var data = [];
//   const [data, setData] = useState([]);
//   const [items, setItems] = useState([]);
//   // const set = (result)=>{
//   //   fetch("http://127.0.0.1:8000/getQuations/"+result[i][0])
//   //               .then((res) => res.json())
//   //               .then((result2) => {
//   //                 setChapter(result2);
//   //                 console.log(result2);
//   //                 data[i]=chapter;
//   //                 i++;
//   //               });
                
//   //     });
//   // }
//   useEffect(() => {
//     fetch("http://localhost:8000/getChapter")
//       .then((res) => res.json())
//       .then((result) => {
//         result.map((row) => (console.log(row)))
//   }, []);})
//   return (
    
//     <div>
//       {/* {data[0].map((row) => (
//         <Link
//           to={"/Bisection"}
//           onClick={() =>
//             Bisrection_receivedata({
//               number: row.number,
//               root: row.root,
//             })
//           }
//         >
//           <MathComponent tex={String("^" + row.root + "\\sqrt" + row.number)} />
//         </Link>
//       ))} */}
//     </div>
//   );
// }
