import React, { Component } from "react";
import ItemsDataService from "../services/items.service";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMesh = this.onChangeMesh.bind(this);
    this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
    this.onChangeAmmoOffset = this.onChangeAmmoOffset.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCraftedItem = this.onChangeCraftedItem.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.getItems = this.getItems.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);

    this.state = {
      currentItems: {
        id: null,
        name: "",
        mesh: "", 
        item_category: "",
        AmmoOffset: "",
        Type: "", 
        crafted_item: "",
        weight: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getItems(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentItems: {
          ...prevState.currentItems,
          name: name
        }
      };
    });
  }

  onChangeMesh(e) {
    const mesh = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        mesh: mesh
      }
    }));
  }

  onChangeItemCategory(e) {
    const item_category = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        item_category: item_category
      }
    }));
  }
  onChangeAmmoOffset(e) {
    const AmmoOffset = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        AmmoOffset: AmmoOffset
      }
    }));
  }
  onChangeType(e) {
    const Type = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        Type: Type
      }
    }));
  }
  onChangeCraftedItem(e) {
    const crafted_item = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        crafted_item: crafted_item
      }
    }));
  }
  onChangeWeight(e) {
    const weight = e.target.value;
    
    this.setState(prevState => ({
      currentItems: {
        ...prevState.currentItems,
        weight: weight
      }
    }));
  }

  getItems(id) {
    ItemsDataService.get(id)
      .then(response => {
        this.setState({
          currentItems: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateItems() {
    ItemsDataService.update(
      this.state.currentItems.id,
      this.state.currentItems
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Item was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteItems() {    
    ItemsDataService.delete(this.state.currentItems.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/items')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentItems } = this.state;

    return (
      <div>
        {currentItems ? (
          <div className="edit-form">
            <h4>Items</h4>
            <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mesh">Mesh</label>
              <input
                type="text"
                className="form-control"
                id="mesh"
                value={this.state.mesh}
                onChange={this.onChangeMesh}
              />
            </div>
            <div className="form-group">
              <label htmlFor="item_category">Item Category</label>
              <input
                type="text"
                className="form-control"
                id="item_category"
                value={this.state.item_category}
                onChange={this.onChangeItemCategory}
              />
            </div>

            <div className="form-group">
              <label htmlFor="AmmoOffset">Ammo Offset</label>
              <input
                type="text"
                className="form-control"
                id="AmmoOffset"
                value={this.state.AmmoOffset}
                onChange={this.onChangeAmmoOffset}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Type">Type</label>
              <input
                type="text"
                className="form-control"
                id="Type"
                value={this.state.Type}
                onChange={this.onChangeType}
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                value={this.state.weight}
                onChange={this.onChangeWeight}
              />
            </div>

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteItems}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateItems}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Item...</p>
          </div>
        )}
      </div>
    );
  }
}
