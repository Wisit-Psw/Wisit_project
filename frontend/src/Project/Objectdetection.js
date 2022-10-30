import React, {Component } from "react";
import axios from "axios";
import  WebcamCapture  from "./camera";
class Objectdetection extends Component { 
  async renderFile() {
    const preview = document.getElementById('image');
    const file2 = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    const file = document.querySelector("#file").files[0];
    const formData = new FormData();
    console.log(file)
    formData.append("file", file);
    var type = await axios.post(
      "http://localhost:8000/objectDetection",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    reader.addEventListener("load", () => {
        preview.src = reader.result;
      }, false);
    
      if (file2) {
        reader.readAsDataURL(file2);
      }
    console.log(type);
    document.getElementById("showtype").innerHTML = type.data.toString();
  }
  render() {
    return (
      <div>
        <form id="uploadForm" method="post" enctype="multipart/form-data">
          <input
            type="file"
            id="file"
            name="file"
            onChange={this.renderFile}
          />
        </form>

        <div id="img">
        <img id="image" src="" height="200" alt="Image_preview" />
        </div>
        <div id="showtype"></div>
        <WebcamCapture/>
      </div>
    );
  }
}

export default Objectdetection;
