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
    return this.state.item

  }
  handle_quantity(event) {
    this.setState({ quantity: event.target.value })
    return this.state.quantity
  }
  add_to_cart(event) {
    console.log('click to add to cart')
  }
  render() {
    return (
      <div className="App">
        <div className="card" >
          <div className="header">
            <h1> Shopping List </h1>
          </div>
          <div className="container">
            <ul id="cart">
              <li><b>{this.state.item}</b></li>
              <li><b>{this.state.quantity}</b></li>
            </ul>
          </div>
          <div className="footer">
            <span id="total-price"></span>
          </div>
        </div>
        <div className="inputArea">
          <input placeholder='enter the items to add' name='item' value={this.state.item} onChange={this.handle_item.bind(this)} type="text" id="item" />
          <input placeholder='enter number of items' name='quantity' value={this.state.quantity} onChange={this.handle_quantity.bind(this)} type="text" id="price" />
          <button onClick={this.add_to_cart.bind(this)}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default App;
