import React, { Component } from "react";
import GaussElm from "./Project/Linear/GaussElm";
import Cramers from "./Project/Linear/Cramers";
import Matrixinvertion from "./Project/Linear/Matrixinvertion";
import Jacobi from "./Project/Linear/JacobiIteration";
import Bisection from "./Project/rootofequation/Bisection";
import FalsePosition from "./Project/rootofequation/FalsePosition";
import Onepoint from "./Project/rootofequation/Onepoint";
import SecantMethod from "./Project/rootofequation/Secant";
import Home from "./Project/Home";
import Newtonraphson from "./Project/rootofequation/Newtonraphson";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div style={{margin:"0 0 100px 0"}}> 
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Bisection" element={<Bisection data={{}} />} />
            <Route path="/FalsePosition" element={<FalsePosition />} />
            <Route path="/Onepoint" element={<Onepoint />} />
            <Route path="/Newtonraphson" element={<Newtonraphson />} />
            <Route path="/SecantMethod" element={<SecantMethod />} />
            <Route path="/CramersRules" element={<Cramers />} />
            <Route path="/GaussElm" element={<GaussElm />} />
            <Route path="/Matrixinvertion" element={<Matrixinvertion />} />
            <Route path="/Jacobi" element={<Jacobi />} />
            
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
