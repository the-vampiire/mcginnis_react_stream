import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
