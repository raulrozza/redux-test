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
      <Link to="/">
        <FaSignInAlt />
      </Link>
      <Link to="/">
        <FaUserAlt />
      </Link>
    </Nav>
  );
}

export default Header;
