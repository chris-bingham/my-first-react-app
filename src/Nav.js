import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={"menu_item_" + item.id}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
