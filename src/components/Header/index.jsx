import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styles';

function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/register">
        <FaUserAlt />
      </Link>
      <Link to="/login">
        <FaSignInAlt />
      </Link>
    </Nav>
  );
}

export default Header;
