import Editor from "./editor/Editor";
import Sidebar from "./Sidebar";
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
    <div>
      <Sidebar noteProp={DUMMY_DATA}/>
      <Editor noteText={DUMMY_DATA}/>
    </div>
  );
}

export default NotesPage;
