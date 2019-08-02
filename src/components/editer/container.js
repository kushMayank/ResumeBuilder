import React, { Component } from "react";
import Editor from "./editor";
import Random from "./random";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.handleOnSubmit = data => {
      console.log("here===>", data);
    };
    return (
      <div>
        <Editor data="njdndj" onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Container;
