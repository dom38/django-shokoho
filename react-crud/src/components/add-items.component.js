import React, { Component } from "react";
import ItemsDataService from "../services/items.service";

export default class AddItems extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMesh = this.onChangeMesh.bind(this);
    this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
    this.onChangeAmmoOffset = this.onChangeAmmoOffset.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCraftedItem = this.onChangeCraftedItem.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.saveItems = this.saveItems.bind(this);
    this.newItems = this.newItems.bind(this);

    this.state = {
      id: null,
      name: "",
      mesh: "", 
      item_category: "",
      AmmoOffset: "",
      Type: "", 
      crafted_item: "",
      weight: "",

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeMesh(e) {
    this.setState({
      mesh: e.target.value
    });
  }

  onChangeItemCategory(e) {
    this.setState({
      item_category: e.target.value
    });
  }

  onChangeAmmoOffset(e) {
    this.setState({
      AmmoOffset: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      Type: e.target.value
    });
  }

  onChangeCraftedItem(e) {
    this.setState({
      crafted_item: e.target.value
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }

  saveItems() {
    var data = {
      name: this.state.name,
      mesh: this.state.mesh,
      item_category: this.state.item_category,
      AmmoOffset: this.state.AmmoOffset,
      Type: this.state.Type,
      crafted_item: this.state.crafted_item,
      weight: this.state.weight
    };

    ItemsDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          mesh: response.data.mesh,
          item_category: response.data.item_category,
          AmmoOffset: response.data.AmmoOffset,
          Type: response.data.Type,
          crafted_item: response.data.crafted_item,
          weight: response.data.weight,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newItems() {
    this.setState({
      id: null,
      name: "",
      mesh: "", 
      item_category: "",
      AmmoOffset: "",
      Type: "", 
      crafted_item: "",
      weight: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newItems}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mesh">Mesh</label>
              <input
                type="text"
                className="form-control"
                id="mesh"
                required
                value={this.state.mesh}
                onChange={this.onChangeMesh}
                name="mesh"
              />
            </div>
            <div className="form-group">
              <label htmlFor="item_category">Item Category</label>
              <input
                type="text"
                className="form-control"
                id="item_category"
                required
                value={this.state.item_category}
                onChange={this.onChangeItemCategory}
                name="item_category"
              />
            </div>

            <div className="form-group">
              <label htmlFor="AmmoOffset">Ammo Offset</label>
              <input
                type="text"
                className="form-control"
                id="AmmoOffset"
                required
                value={this.state.AmmoOffset}
                onChange={this.onChangeAmmoOffset}
                name="AmmoOffset"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Type">Type</label>
              <input
                type="text"
                className="form-control"
                id="Type"
                required
                value={this.state.Type}
                onChange={this.onChangeType}
                name="Type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="crafted_item">Crafted Item</label>
              <input
                type="text"
                className="form-control"
                id="crafted_item"
                value={this.state.crafted_item}
                onChange={this.onChangeCraftedItem}
                name="crafted_item"
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                required
                value={this.state.weight}
                onChange={this.onChangeWeight}
                name="weight"
              />
            </div>

            <button onClick={this.saveItems} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
