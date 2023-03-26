import React from "react";
import logo from "../images/logo_r4f5mj.png";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div>
          <img src={logo} alt="chart-logo" srcset="" width="80" height="70" />
        </div>

        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>About</li>
          <li>New Arrival</li>
          <li>Products</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
