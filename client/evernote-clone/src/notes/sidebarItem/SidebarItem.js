import { ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./SidebarItem.module.css";

import { removeHTMLTags } from "../Helpers";

function SidebarItem(props) {

    const selectNote = (n, i) => {props.selectNote(n, i)}

  return (
    <div key={props.id} id={props.id}>
      
      <ListItem 
      className={classes.listItem} 
      alignItems="flex-start">
        <div 
        onClick={() => selectNote(props._note, props._index)}
        className={classes.textSection}>
          <ListItemText
            primary={props._note.title}
            secondary={removeHTMLTags(props._note.body.substring(0, 30)) + "..."}
          />
        </div>
        <DeleteIcon className={classes.deleteIcon} />
      </ListItem>
    </div>
  );
}

export default SidebarItem;
