import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import debounce from "../Helpers";
import classes from "./Editor.module.css";

function Editor() {
  const [value, setValue] = useState("");

  const update = debounce(() => {
      setValue(value)
    console.log('UPDATING TEXT')
  }, 1500)

  return (
    <div className={classes.editorContainer}>
      <ReactQuill theme="snow" value={value} onChange={update} />
    </div>
  );
}

export default Editor;
