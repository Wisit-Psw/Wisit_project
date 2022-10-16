
import React, { Component } from "react";
import axios from "axios";
import { MathComponent } from "mathjax-react";
import { Link } from "react-router-dom";
import { Bisrection_receivedata } from "./rootofequation/Bisection";
import { FalsePosition_receivedata} from "./rootofequation/FalsePosition";
import { Onepoint_receivedata} from "./rootofequation/Onepoint";
import { Newtonraphson_receivedata } from "./rootofequation/Newtonraphson";
import { SecantMethod_receivedata } from "./rootofequation/Secant";

var chap={
  1001:Bisrection_receivedata,
  1002:FalsePosition_receivedata,
  1003:Onepoint_receivedata,
  1004:Newtonraphson_receivedata,
  1005:SecantMethod_receivedata,
};
class Getapi extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const result = await axios.get(this.props.url+this.props.chap);
    this.setState({ data: result.data });
  }
  textCondition(row) {
    if(this.props.chap=='1001'){return ["/Bisection",String("^" + row.root + "\\sqrt" + row.number)]}
    else if(this.props.chap=='1002'){return ["/FalsePosition",String(row.Fx)]}
    else if(this.props.chap=='1003'){return ["/Onepoint",String(row.Fx)]}
    else if(this.props.chap=='1004'){return ["/Newtonraphson",String(row.Fx)]}
    else if(this.props.chap=='1005'){return ["/SecantMethod",String(row.Fx)]}
    else {return ['','']}
  }
  render() {
    // console.log(chap)
    return(
      <div>
      {this.state.data.map((row) => (
        console.log(this.textCondition(row)),
      <Link
        to={this.textCondition(row)[0]}
        onClick={() =>
          chap[this.props.chap](row)
        }
      >
        <MathComponent tex={this.textCondition(row)[1]} />
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
