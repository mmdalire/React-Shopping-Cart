import React, { Component } from "react";
import reactLogo from "../images/react-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={reactLogo} id="logo" alt="React logo" />
        <div className="footer-content">
          <h1>React Shopping Cart</h1>
          <h3>Date started: May 27, 2020</h3>
          <h3>Date ended:</h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
