import React, { Component } from "react";
import ShoppingInput from "./ShoppingInput";
import ShoppingItems from "./ShoppingItems";
import ShoppingTotal from "./ShoppingTotal";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, name: "Ice cream", quantity: 0, price: 30 },
        { id: 2, name: "Tacos", quantity: 0, price: 50 },
        { id: 3, name: "Pizza", quantity: 0, price: 100 },
        { id: 4, name: "Spaghetti", quantity: 0, price: 70 },
      ],
      currentId: 4,
      total: 0,
    };

    this.handleTotal = this.handleTotal.bind(this);
    this.handleShoppingItems = this.handleShoppingItems.bind(this);
  }

  handleTotal(total) {
    this.setState({
      total: this.state.total + total,
    });
  }

  handleShoppingItems(product, price) {
    this.setState({
      products: [
        ...this.state.products,
        {
          id: this.state.currentId + 1,
          name: product,
          quantity: 0,
          price: parseInt(price),
        },
      ],
    });
  }

  render() {
    const products = this.state.products.map((product) => (
      <ShoppingItems
        key={product.id}
        product={product}
        handleTotal={this.handleTotal}
      />
    ));

    return (
      <>
        <div className="ShoppingCart">
          <ShoppingInput handleShoppingItems={this.handleShoppingItems} />
          {products}
          <ShoppingTotal total={this.state.total} />
        </div>
      </>
    );
  }
}

export default ShoppingCart;
