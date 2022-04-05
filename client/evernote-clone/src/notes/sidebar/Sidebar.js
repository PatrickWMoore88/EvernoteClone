import React, { useState } from "react";
import SidebarItem from "../sidebarItem/SidebarItem";
import classes from "./Sidebar.module.css";

import { List, Divider, Button } from "@mui/material";

function Sidebar(props) {
  const [title, setTitle] = useState(null);
  const [addingNote, setAddingNote] = useState(false);

  const newNoteBtnClick = () => {
    setAddingNote(!addingNote);
  };

  const updateTitle = (txt) => {
    setTitle(txt);
  };

  const submitNewNote = () => {
      console.log(title)
  }

  const selectNote = (n, i) => {
      props.selectNote(n, i)
  }

  return (
    <div className={classes.sidebarContainer}>
      <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
        {addingNote ? "Cancel" : "New"}
      </Button>
      {addingNote ? (
        <div>
          <input
            type="text"
            className={classes.newNoteInput}
            placeholder="Enter note title..."
            onKeyUp={(e) => updateTitle(e.target.value)}
          />
          <Button className={classes.newNoteSubmitBtn} onClick={submitNewNote}>Submit</Button>
        </div>
      ) : null}
      <List>
        {props.noteProp.map((_note, _index) => (
          <React.Fragment key={_note.id}>
            <SidebarItem
              key={_note.id}
              _index={_index}
              _note={_note}
              selectNote={selectNote}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
