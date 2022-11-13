import React, {Component } from "react";
// import axios from "axios";
import  WebcamCapture  from "./camera";
// import { CameraFeed } from "./camera-feed"
class Objectdetection extends Component { 
  render() {
    return (
      <div>
        <WebcamCapture />
      </div>
    );
  };
}

export default Objectdetection;
