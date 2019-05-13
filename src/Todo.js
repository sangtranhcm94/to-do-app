import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";

var checkDate = (d) => {
    if(d && (new Date(d).toLocaleDateString()) === (new Date).toLocaleDateString()){
        return 'to day';
    }else{
        return d;
    }
}

export default props => (
  <ListItem  className="listItem">
    <Checkbox tabIndex={-1} disableRipple onChange={props.toggleDone} />
    <ListItemText primary={props.todo.text} style={{textDecoration: props.todo.done ? 'line-through' : ''}}/>
    <ListItemSecondaryAction>
      {checkDate(props.todo.dueDate)}
      {props.todo.priority ? <BookmarkIcon style={{color: 'red'}}/> : ''}
      <IconButton aria-label="Delete" onClick={props.deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
