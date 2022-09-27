import React,{Component} from "react";
import GaussElm from "./Project/Linear/GaussElm";
import Cramers from "./Project/Linear/Cramers";
import Matrixinvertion from "./Project/Linear/Matrixinvertion";

import Bisection from "./Project/rootofequation/Bisection";
import Home from "./Project/Home";
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import {NavBar} from './Navbar'
import {Footer} from './Footer'
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

          </Routes>
          <Footer/>
          </BrowserRouter>
          </div>
    );
  }
}

export default App;
