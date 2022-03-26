/* import React, { Component } from "react";
import ReactQuill from "react-quill";

import debounce from "../Helpers";
import styles from "./Editor.module.css";
import "react-quill/dist/quill.snow.css";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div className={styles.editorContainer}>
        <ReactQuill
          theme="snow"
          value={this.state.text}
          onChange={this.updateBody}
        />
      </div>
    );
  }

  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  update = debounce(() => {
    console.log("User is updating");
  }, 2000);
}
export default Editor; */

import React, { useState, useMemo, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import debounce from "../Helpers";
import classes from "./Editor.module.css";

function Editor(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle(props.noteProp.title);
    setText(props.noteProp.body);
  }, [props.noteProp.title, props.noteProp.body]);

  const changeTextHandler = (text) => {
    setText(text);
    debouncedUpdate();
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const updateHandler = () => {
    console.log("User is updating");
  };

  const debouncedUpdate = useMemo(() => debounce(updateHandler, 2000), []);

  return (
    <div className={classes.editorContainer}>
      <input
        className={classes.titleInput}
        placeholder="Note title..."
        value={title}
        onChange={(e) => changeTitleHandler(e)}
      ></input>
      <ReactQuill theme="snow" value={text} onChange={changeTextHandler} />
    </div>
  );
}

export default Editor;
