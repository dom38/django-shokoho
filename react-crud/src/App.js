import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddItems from "./components/add-items.component";
import Items from "./components/items.component";
import ItemsList from "./components/items-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/items" className="navbar-brand">
            Shokuho
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/items"} className="nav-link">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemsList} />
            <Route exact path="/add" component={AddItems} />
            <Route path="/items/:id" component={Items} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
