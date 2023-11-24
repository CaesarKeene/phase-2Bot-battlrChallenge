import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Bot Collection</NavLink>
        </li>
        <li>
          <NavLink to="/your-bot-army">Your Bot Army</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;