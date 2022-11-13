import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from "axios";
import ReactDOM from 'react-dom';
export default class WebcamCapture extends Component{
    
    constructor(props){
        super(props);
        this.state = { screenshot: null ,src:null}
    }
    // async screenshot() {
    //     var screenshot = this.refs.webcam.getScreenshot();
    //     console.log(screenshot)
    //     this.setState({screenshot: screenshot});
    //     const result = await axios.post("http://localhost:8000/objectDetectionBase64/"+this.state);
    //     // this.setState({ data: result.data });
    //   }
    componentDidMount(){
        this.renderFile()
    }
      async renderFile() {
        const imshow2 = ReactDOM.createRoot(document.getElementById("imshow2"));
        while(1){
                var type = await axios.get(
                    "http://localhost:8000/live"
                  );
                  console.log(type.data.toString());
                  this.setState({src: type});
                  imshow2.render(
                    <div id="imshow"><img id="imshow" src={"data:image/jpeg;base64,"+type.data.toString()} alt=""/></div>
                  );
                  // document.getElementById("showtype").innerHTML = type.data.toString();

                  // ReactDOM.render(<div dangerouslySetInnerHTML={{ __html:"<img src={`data:image/jpeg;base64,${"+type+"}`} />"}} style={{margin:'auto'}}></div> , document.getElementById('container'))
                }
        }
        
        
      
     uploadImage = async file => {
        const formData = new FormData();
        formData.append('file', file);
    
        // Connect to a seaweedfs instance
    };
    render(){
        return (
            <div >
             <div id="imshow2"></div>
             {/* {this.renderFile()} */}
            </div>
            )
    }
}