import React, { Component } from "react";

class ShoppingTotal extends Component {
  render() {
    return (
      <div className="ShoppingTotal">
        <h2>Total: {this.props.total.toLocaleString()} Php</h2>
      </div>
    );
  }
}

export default ShoppingTotal;
