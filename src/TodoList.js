import React from "react";
import List from "@material-ui/core/List";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import SearchAppBar from "./SearchAppBar";
import Footer from "./Footer";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    filterText: "",
    filterDate: "",
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isDeleted: true
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleToggleDone = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleSearchText = event => {
    this.setState({
      filterText: event.target.value.toLowerCase()
    });
  };

  handleSearchDate = event => {
    this.setState({
      filterDate: event.target.value
    });
  };

  clearAllSearch = () => {
    this.setState({
      filterText: "",
      filterDate: "",
    });
  };

  render() {
    var todosToShows,
      searchValue,
      filterText = this.state.filterText,
      filterDate = this.state.filterDate;

    if (filterDate.length > 0) {
      todosToShows = this.state.todos.filter(function(el) {
        searchValue = el.dueDate.toLowerCase();

        return searchValue.indexOf(filterDate) !== -1;
      });
    } else {
      todosToShows = this.state.todos;
    }

    if (filterText.length > 0) {
      todosToShows = todosToShows.filter(function(el) {
        searchValue = el.text.toLowerCase();

        return searchValue.indexOf(filterText) !== -1;
      });
    } else {
      todosToShows = todosToShows;
    }

    return (
      <div>
        <h2 style={{textAlign: 'center'}}>To do App</h2>
        <TodoForm onSubmit={this.addTodo} />
        <SearchAppBar
          handleSearchText={this.handleSearchText}
          handleSearchDate={this.handleSearchDate}
          clearAllSearch={this.clearAllSearch}
          data={this.state}
          className="searchBar"
        />
        {todosToShows.map(todo =>
          todo.isDeleted ? (
            ""
          ) : (
            <List key={todo.id} className="listTodo">
              <Todo
                todo={todo}
                deleteTodo={() => this.handleDelete(todo.id)}
                toggleDone={() => this.handleToggleDone(todo.id)}
              />
              
            </List>
          )
        )}
        <Footer label="Total: " data={todosToShows}/>
      </div>
    );
  }
}
