import React, { Component } from "react";

class ShoppingItems extends Component {
  constructor(props) {
    super(props);

    const { name, price, quantity } = this.props.product;
    this.state = {
      name: name,
      price: price,
      quantity: quantity,
      subtotal: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      quantity: this.state.quantity + 1,
      subtotal: this.state.subtotal + this.state.price,
    });
  }

  handleDecrement() {
    this.setState({
      quantity: this.state.quantity - 1,
      subtotal: this.state.subtotal - this.state.price,
    });
  }

  render() {
    const { name, quantity, price, subtotal } = this.state;
    return (
      <div className="ShoppingItems">
        <span className="item-name">{name}</span>
        <span className="item-price">{price} Php</span>
        <div className="item-change-quantity">
          <button
            className="decrement"
            onClick={() => {
              this.handleDecrement();
              this.props.handleTotal(-price);
            }}
            disabled={quantity <= 0}
          >
            -
          </button>
          <span className="item-quantity">{quantity}</span>
          <button
            className="increment"
            onClick={() => {
              this.handleIncrement();
              this.props.handleTotal(price);
            }}
          >
            +
          </button>
        </div>
        <span className="item-subtotal">{subtotal} Php</span>
      </div>
    );
  }
}

export default ShoppingItems;
