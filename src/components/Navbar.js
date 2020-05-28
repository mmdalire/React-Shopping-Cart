import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="fas fa-shopping-cart" id="shopping-logo"></i>
        <div className="shopping-logo-name">React Shopping Cart</div>
      </nav>
    );
  }
}

export default Navbar;
