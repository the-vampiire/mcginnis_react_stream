import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav">
    <li>
      <NavLink exact to="/" activeClassName="active_link">
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/battle" activeClassName="active_link">
        Battle
      </NavLink>
    </li>

    <li>
      <NavLink to="/popular" activeClassName="active_link">
        Popular
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
