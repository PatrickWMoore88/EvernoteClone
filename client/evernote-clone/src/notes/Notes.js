import { useState, useEffect } from "react";
import Editor from "./editor/Editor";
import Sidebar from "./sidebar/Sidebar";
const DUMMY_DATA = [
  {
    id: 1,
    title: "Title 1",
    body: "Here is a random body of text ",
  },
  {
    id: 2,
    title: "Title 2",
    body: "Here is a different random body of text",
  },
];

function NotesPage() {
  const [notes, setNotes] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  //Gets the notes upon loading the page
  useEffect(() => {
    const fetchData = () => {
      setNotes(DUMMY_DATA);
    };
    fetchData();
  }, [notes]);

  const selectNote = (_note, _index) => {
    setSelectedNote(_note);
    setSelectedIndex(_index);
  };

  return (
    <div className="app-container">
      {notes ? (
        <Sidebar
          noteProp={notes}
          selectNote={(n, i) => {
            selectNote(n, i);
          }}
        />
      ) : (
        <em>Loading...</em>
      )}

      {selectedNote ? <Editor _selectedNote={selectedNote} /> : null}
    </div>
  );
}

export default NotesPage;
