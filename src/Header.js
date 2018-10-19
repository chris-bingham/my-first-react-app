import React, { Component } from "react";
import Nav from "./Nav.js";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>React Site</h1>
        <Nav menuItems={this.props.menuItems} />
      </header>
    );
  }
}

export default Header;
