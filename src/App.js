import React from "react";
import "./App.css";
import Resume from "./components/resume/resume";
import Editor from "./components/editer/editor";
import Container from "./components/editer/container";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <div className="resumeContainer">
          <Resume />
        </div>
        <div className="editorContainer">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
