import React, { Component } from "react";
import ItemsDataService from "../services/items.service";
import { Link } from "react-router-dom";

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveItems = this.retrieveItems.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItems = this.setActiveItems.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      items: [],
      currentItems: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveItems();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveItems() {
    ItemsDataService.getAll()
      .then(response => {
        this.setState({
          items: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveItems();
    this.setState({
      currentItems: null,
      currentIndex: -1
    });
  }

  setActiveItems(item, index) {
    this.setState({
      currentItems: item,
      currentIndex: index
    });
  }

  removeAllItems() {
    ItemsDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    ItemsDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          items: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    {
        const { searchName, items, currentItems, currentIndex } = this.state;
    
        return (
          <div className="list row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name"
                  value={searchName}
                  onChange={this.onChangeSearchName}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.searchName}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Items List</h4>
    
              <ul className="list-group">
                {items &&
                  items.map((items, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveItems(items, index)}
                      key={index}
                    >
                      {items.name}
                    </li>
                  ))}
              </ul>
    
              <button
                className="m-3 btn btn-sm btn-danger"
                onClick={this.removeAllItems}
              >
                Remove All
              </button>
            </div>
            <div className="col-md-6">
              {currentItems ? (
                <div>
                  <h4>Items</h4>
                  <div>
                    <label>
                      <strong>ID:</strong>
                    </label>{" "}
                    {currentItems.id}
                  </div>
                  <div>
                    <label>
                      <strong>Name:</strong>
                    </label>{" "}
                    {currentItems.name}
                  </div>
                  <div>
                    <label>
                      <strong>Mesh:</strong>
                    </label>{" "}
                    {currentItems.mesh}
                  </div>
                  <div>
                    <label>
                      <strong>Item Category:</strong>
                    </label>{" "}
                    {currentItems.item_category}
                  </div>
                  <div>
                    <label>
                      <strong>Ammo Offset:</strong>
                    </label>{" "}
                    {currentItems.AmmoOffset}
                  </div>
                  <div>
                    <label>
                      <strong>Type:</strong>
                    </label>{" "}
                    {currentItems.Type}
                  </div>
                  <div>
                    <label>
                      <strong>Crafted Item:</strong>
                    </label>{" "}
                    {currentItems.crafted_item}
                  </div>
                  <div>
                    <label>
                      <strong>Weight:</strong>
                    </label>{" "}
                    {currentItems.weight}
                  </div>
    
                  <Link
                    to={"/items/" + currentItems.id}
                    className="badge badge-warning"
                  >
                    Edit
                  </Link>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click on an Item...</p>
                </div>
              )}
            </div>
          </div>
        );
      }
  }
}
