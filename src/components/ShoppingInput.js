import React, { Component } from "react";

class ShoppingInput extends Component {
  constructor() {
    super();

    this.state = {
      product: "",
      price: "",
    };

    this.handleProduct = this.handleProduct.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  handleProduct(e) {
    this.setState({
      product: e.target.value,
    });
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  render() {
    const { product, price } = this.state;
    return (
      <div className="ShoppingInput">
        <button
          id="add-button"
          onClick={() => {
            this.props.handleShoppingItems(product, price);
            this.setState({ product: "", price: "" });
          }}
        >
          +
        </button>
        <input
          type="text"
          placeholder="Enter product"
          value={product}
          onChange={this.handleProduct}
        />
        <input
          type="number"
          placeholder="Enter price of product"
          value={price}
          onChange={this.handlePrice}
        />
      </div>
    );
  }
}

export default ShoppingInput;
