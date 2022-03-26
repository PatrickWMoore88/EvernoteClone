import SidebarItem from "../sidebarItem/SidebarItem";
import classes from "./Sidebar.module.css";

import { List, Divider, Button } from '@mui/material';

function Sidebar(props) {
  return (
    <div className={classes.sidebarContainer}>
      <List>
          {props.noteProp.map((note) => (
          <>
            <SidebarItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
            />
            <Divider />
          </>
        ))}
      </List>
        
     
    </div>
  );
}

export default Sidebar;
