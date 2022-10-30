import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from "axios";

export default class WebcamCapture extends Component{

    constructor(props){
        super(props);
        this.state = { screenshot: null }
    }
    // async screenshot() {
    //     var screenshot = this.refs.webcam.getScreenshot();
    //     console.log(screenshot)
    //     this.setState({screenshot: screenshot});
    //     const result = await axios.post("http://localhost:8000/objectDetectionBase64/"+this.state);
    //     // this.setState({ data: result.data });
    //   }
      async renderFile() {
        var screenshot = this.refs.webcam.getScreenshot();
        console.log(screenshot)
        this.setState({screenshot: screenshot});
        
      }
     uploadImage = async file => {
        const formData = new FormData();
        formData.append('file', file);
    
        // Connect to a seaweedfs instance
    };
    render(){
        return (
            <div >
                <div style={{display:"flex",alignItems:"center",justifyContent: "center"}}>
                <Webcam mirrored={false} audio ={false} imageSmoothing={true} ref='webcam' screenshotFormat='image/jpg'/>
             { this.state.screenshot ? <img src={this.state.screenshot} alt=""/>:null }
                </div>   
             
             <button onClick={this.renderFile.bind(this)}>Capture</button>
             
            </div>
            )
    }
}