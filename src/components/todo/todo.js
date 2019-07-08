import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " ",
      items: []
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addItem = () => {
    console.log("hit");
    axios
      .post("/api/list", {
        name: this.state.input
      })
      .then(res => {
        this.setState({
          items: res.data
        });
      });
    {
    }
  };
  deleteItem = id => {
    axios
      .delete(`/api/list/${id}`, {
        data: {
          id: id
        }
      })
      .then(res => {
        this.setState({
          items: res.data
        });
      });
  };
  render() {
    console.log(this.state.items);
    let mapped = this.state.items.map((val, index) => {
      return (
        <div>
          <h1 key={index}>{val}</h1>
          <button onClick={this.deleteItem(val.index)}>X</button>
          <button>Edit</button>
        </div>
      );
    });

    return (
      <div>
        <input onChange={this.handleChange} name="input" />
        <button onClick={this.addItem}>Add Item</button>
        {mapped}
      </div>
    );
  }
}

export default Todo;
