import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Chris' React Site</h1>
        <ul>
          {this.props.menuItems.map(item => (
            <li key={"menu_item_" + item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
