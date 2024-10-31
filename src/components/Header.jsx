import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ToDo.png';

const Header = () => (
  <header>
    <div className="container">
      <div className="content">
        <img src={logo} alt="Logo" />
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
