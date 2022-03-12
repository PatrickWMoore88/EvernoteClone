import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  return (
  <div>
      <ul>
          {props.noteProp.map((note) =>  
              <SidebarItem 
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              />
          )}
      </ul>
  </div>
  );
}

export default Sidebar;
