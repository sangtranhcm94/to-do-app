import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./Login";

import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/to-do" component={TodoList} />
        </Router>
      </div>
    );
  }
}

export default App;
