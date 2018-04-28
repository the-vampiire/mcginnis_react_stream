import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav row">
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
