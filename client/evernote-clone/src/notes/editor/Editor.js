import React, { useState, useMemo, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import debounce from "../Helpers";
import classes from "./Editor.module.css";

function Editor(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] =useState("")

  useEffect(() => {
    setTitle(props._selectedNote.title);
    setText(props._selectedNote.body);
  }, [props._selectedNote.title, props._selectedNote.body]);

  const changeTextHandler = (text) => {
    setText(text);
    debouncedUpdate();
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
    debouncedUpdate();
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
