import "antd";
import { Component } from "react";
import React from "react";
import Getapi from "./getApi";
class Home extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div style={{ marginTop: "0" }}>
        <div>
          <h3 style={{margin:"20px auto"}}>Root of equations</h3>
          <table style={{margin:"50px auto"}}>
            <tr>
              <td style={{padding:"0 20px"}}>
                <h5>Bisection Method</h5>
                <Getapi url="http://localhost:8000/getQuations/" chap="1001" />
              </td >
              <td style={{padding:"0 20px"}}>
                <h5>False Position Method</h5>
                <Getapi url="http://localhost:8000/getQuations/" chap="1002" />
              </td >
              <td style={{padding:"0 20px"}}>
                <h5>Onepoint Iteration</h5>
                <Getapi url="http://localhost:8000/getQuations/" chap="1003" />
              </td>
              <td style={{padding:"0 20px"}}>
                <h5>Newton Raphson</h5>
                <Getapi url="http://localhost:8000/getQuations/" chap="1004" />
              </td>
              <td style={{padding:"0 20px"}}>
                <h5>Secant Method</h5>
                <Getapi url="http://localhost:8000/getQuations/" chap="1005" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
