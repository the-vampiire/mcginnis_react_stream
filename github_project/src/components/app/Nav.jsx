import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/popular" activeClassName="active">
          Popular Repos
        </NavLink>
      </li>
      <li>
        <NavLink to="/battle" activeClassName="active">
          Battle
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
