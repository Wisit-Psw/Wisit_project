import  "antd";
import {Component} from "react";
import React from 'react';

class Home extends Component {
    constructor(){
      super();
        console.log("constructor");
    }

    componentDidMount(){
      console.log("componentDidMount");
    }
    render(){
      console.log("render");
      return (
          <div>
            Hello World
          </div>
      );
    }
}

export default Home;
