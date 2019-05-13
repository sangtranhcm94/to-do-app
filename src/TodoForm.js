import React from "react";
import shortid from "shortid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Bookmark from "@material-ui/icons/Bookmark";
import TextField from "@material-ui/core/TextField";

import "react-datepicker/dist/react-datepicker.css";

export default class TodoForm extends React.Component {
  state = {
    text: "",
    dueDate: "",
    priority: false,
    completed: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDueDateChange = event => {
    this.setState({
      dueDate: event.target.value
    });
  };

  handleSetPriority = event => {
    this.setState({
      priority: !this.state.priority
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.length > 0) {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        dueDate: this.state.dueDate,
        priority: this.state.priority,
        done: false,
        isDeleted: false
      });
      this.setState({
        text: "",
        dueDate: "",
        priority: false,
        done: false
      });
    } else {
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex", backgroundColor: '#7bad17'}}>
        <input
          name="text"
          className="inputItem"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="add new to do item"
          required
        />
        <TextField
            style={{width: '230px'}}
          id="date"
          label="Due date"
          type="date"
          value={this.state.dueDate}
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.handleDueDateChange}
        />
        <IconButton
          aria-label="High priority"
          style={{
            color: this.state.priority ? "red" : ""
          }}
          onClick={this.handleSetPriority}
          tooltip="set priority"
        >
          <Bookmark />
        </IconButton>
        <IconButton aria-label="Add" onClick={this.handleSubmit}>
          <AddIcon />
        </IconButton>
      </form>
    );
  }
}
