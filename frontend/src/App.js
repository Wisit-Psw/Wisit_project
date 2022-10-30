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
import GaussSeidel from "./Project/Linear/GaussSeidel";
import ConjugateGradient from "./Project/Linear/ConjugateGradient";
import NewtonDivided from "./Project/Interpolation/newton_divide";
import Lagrange from "./Project/Interpolation/Lagrange";
import LinearReg from "./Project/Regression/Linear_reg";
import PolynomialReg from "./Project/Regression/Polynomial_reg";
import MultiLinearReg from "./Project/Regression/MultiLinear_reg";
import Objectdetection from "./Project/Objectdetection";
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
          <div style={{ margin: "0 0 100px 0" }}>
            <Routes>
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
              <Route path="/GaussSeidel" element={<GaussSeidel />} />
              <Route path="/Conjugate" element={<ConjugateGradient />} />
              <Route path="/Newton_Div" element={<NewtonDivided />} />
              <Route path="/Lagrange" element={<Lagrange />} />
              <Route path="/Linear_Reg" element={<LinearReg />} />
              <Route path="/Polynomial_Reg" element={<PolynomialReg />} />
              <Route path="/MultiLinear_Reg" element={<MultiLinearReg />} />
              <Route path="/Objectdetection" element={<Objectdetection />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
