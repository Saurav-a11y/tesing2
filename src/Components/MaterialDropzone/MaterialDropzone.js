import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

export default class MaterialDropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return (
      <DropzoneArea filesLimit="1" onChange={this.handleChange.bind(this)} />
    );
  }
}
