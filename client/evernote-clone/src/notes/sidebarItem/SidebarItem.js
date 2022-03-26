import { ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./SidebarItem.module.css";

import { removeHTMLTags } from "../Helpers";

function SidebarItem(props) {
  return (
    <ListItem className={classes.listItem} alignItems="flex-start">
      <div className={classes.textSection}>
        <ListItemText
          primary={props.title}
          secondary={removeHTMLTags(props.body.substring(0, 30)) + "..."}
        />
      </div>
      <DeleteIcon className={classes.deleteIcon} />
    </ListItem>
  );
}

export default SidebarItem;
