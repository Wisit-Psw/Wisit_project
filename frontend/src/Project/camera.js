import React, { Component } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import ReactDOM from "react-dom";
export default class WebcamCapture extends Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: null, src: null };
  }
  componentDidMount() {
    this.renderFile();
  }
  async renderFile() {
    const imshow = ReactDOM.createRoot(document.getElementById("imshow"));
    while (1) {
      var screenshot = this.refs.webcam.getScreenshot();
      this.setState({ screenshot: screenshot });
      const formData = new FormData();
      const base64 = await fetch(screenshot);
      const file = await base64.blob();
      formData.append("file", file);
      var type = await axios.post(
        "http://localhost:8000/objectDetection2",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      this.setState({ src: type });
      imshow.render(
        <div
          id="imshow"
          style={{
            position: "relative",
            top: "0",
            left: "0",
          }}
        >
          <img
            id="imshow"
            src={"data:image/png;base64," + type.data.toString()}
            style={{
              position: "relative",
              top: "0",
              left: "0",
              // border:"solid 2px red"
            }}
            alt=""
          />
        </div>
      );
      }
  }

  uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  };
  render() {
    return (
      <div>
        <div>
          <div
            style={{
              position: "absolute",
              top: "65px",
              left: "0px",
              marginLeft:"448px"
              // visibility: "hidden"
            }}
          >
            <Webcam
              mirrored={false}
              style={{ position: "relative" }}
              audio={false}
              imageSmoothing={false}
              ref="webcam"
              screenshotFormat="image/png"
            />
          </div>

          <div
            id="imshow"
            style={{
              position: "relative",
              top: "0",
              left: "0",
              // border:"solid 2px red"
            }}
          >
            <img id="imshow" src={this.state.src} alt="" />
          </div>
        </div>

        <button
          onClick={this.renderFile.bind(this)}
          style={{marginTop: "500px",position: "fixed"}}
        >
          Capture
        </button>
      </div>
    );
  }
}
