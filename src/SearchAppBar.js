import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

const SearchDate = (props) => {
  return (
    <div style={{margin: '15px 0px 0px 15px'}}>
      {props.label} <InputSearch type="date" placeholder="enter date" onChange={props.handleSearchDate}/>
    </div>
  )
};

const InputSearch = (props) => {
  return (
    <input
          className="inputSearch"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          type={props.type}
        />
  );
}

class SearchAppBar extends React.Component {
  state = {
    text: "",
    dueDate: "",
    priority: false,
    completed: false,
    datePickerIsOpen: false,
  };
  render() {
    return (
      <div style={{ display: "flex", marginTop: "0px", background: 'rgb(206, 236, 234)'}}>
        <SearchIcon style={{ marginTop: "15px" }} />
        <InputSearch
          placeholder="enter search text"
          onChange={this.props.handleSearchText}
          value={this.props.data.filterText}
        />

        <SearchDate
          label="filter date"
          handleSearchDate={this.props.handleSearchDate}
          value={this.props.data.filterDate}
        />

        <IconButton aria-label="Delete" onClick={this.props.clearAllSearch}>
          <ClearIcon />
        </IconButton>
      </div>
    );
  }
}

export default SearchAppBar;
