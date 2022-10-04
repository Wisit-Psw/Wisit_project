import React,{Component} from "react";
import GaussElm from "./Project/Linear/GaussElm";
import Cramers from "./Project/Linear/Cramers";
import Matrixinvertion from "./Project/Linear/Matrixinvertion";
import Jacobi from "./Project/Linear/JacobiIteration";
import Bisection from "./Project/rootofequation/Bisection";
import Home from "./Project/Home";
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import NavBar from './Navbar'
import Footer from './Footer'
import './App.css';

class App extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
        <div className="App">
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Bisection" element={<Bisection />}/>
            <Route path="/CramersRules" element={<Cramers />}/>
            <Route path="/GaussElm" element={<GaussElm />}/>
            <Route path="/Matrixinvertion" element={<Matrixinvertion />}/>
            <Route path="/Jacobi" element={<Jacobi />}/>

          </Routes>
          <Footer/>
          </BrowserRouter>
          </div>
    );
  }
}

export default App;
// import React, { Component } from "react";
// import ReactApexChart from "react-apexcharts";
// var s1 = [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10];
// var state;
// class ApexChart extends Component {
//   constructor(props) {
//     super(props);

//     state = {
//       series: [{
//           name: "Session Duration",
//           data: s1
//         },
//         {
//           name: "Page Views",
//           data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
//         },
//         {
//           name: 'Total Visits',
//           data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
//         }
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//           zoom: {
//             enabled: false
//           },
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           width: [5, 7, 5],
//           curve: 'straight',
//           dashArray: [0, 8, 5]
//         },
//         title: {
//           text: 'Page Statistics',
//           align: 'left'
//         },
//         legend: {
//           tooltipHoverFormatter: function(val, opts) {
//             return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
//           }
//         },
//         markers: {
//           size: 0,
//           hover: {
//             sizeOffset: 6
//           }
//         },
//         xaxis: {
//           categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
//             '10 Jan', '11 Jan', '12 Jan'
//           ],
//         },
//         tooltip: {
//           y: [
//             {
//               title: {
//                 formatter: function (val) {
//                   return val + " (mins)"
//                 }
//               }
//             },
//             {
//               title: {
//                 formatter: function (val) {
//                   return val + " per session"
//                 }
//               }
//             },
//             {
//               title: {
//                 formatter: function (val) {
//                   return val;
//                 }
//               }
//             }
//           ]
//         },
//         grid: {
//           borderColor: '#f1f1f1',
//         }
//       },
    
    
//     };
//   }



//   render() {
//     return (
      

// <div id="chart">
// <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
// </div>
//           );
//         }
//       }

//       export default ApexChart;

// // 