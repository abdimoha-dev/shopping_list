import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    }
  }

  handle_item(event) {
    this.setState({ item: event.target.value })

  }
  handle_quantity(event) {
    this.setState({ quantity: event.target.value })

  }
  render() {
    return (
      <div className="App">
        <div className="card" >
          <div class="header">
            <h1> Shopping List </h1>
          </div>
          <div className="container">
            <ul id="cart">
            </ul>
          </div>
          <div className="footer">
            <h3>Total:</h3>
            <span id="total-price"></span>
          </div>
        </div>
        <div className="inputArea">
          <input placeholder='enter the items to add' name='item' value={this.state.item} onChange={this.handle_item.bind(this)} type="text" id="item" />
          <input placeholder='enter number of items' name='quantity' value={this.state.quantity} onChange={this.handle_quantity.bind(this)} type="text" id="price" />
          <button>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default App;
