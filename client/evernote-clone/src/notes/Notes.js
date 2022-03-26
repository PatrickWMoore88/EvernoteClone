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
    body: "Here is a random body of text",
  },
];

function NotesPage() {
  return (
    <div className="app-container">
      <Sidebar noteProp={DUMMY_DATA}/>
      <Editor noteProp={DUMMY_DATA[0]}/>
    </div>
  );
}

export default NotesPage;
