import React from "react";
import "./App.css";
import Resume from "./components/resume/resume";
import Container from "./components/editer/container";
import {connect} from 'react-redux'

function App(props) {
  let {resume} = props
  return (
    <div className="App">
      <div className="appContainer">
        <div className="resumeContainer">
          {
            resume.length > 0 ? 
            resume.map((list,id)=><Resume details={list} key={id} />)
            : 
            <label>No Resume Found, Please Add details</label>
          }
        </div>
        <div className="editorContainer">
          <Container />
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (store)=>{
  return{
    resume: store.resume
  }
} 

export default connect(mapStateToProps)(App);
