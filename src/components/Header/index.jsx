import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// Icons
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';

// Styles
import { Nav } from './styles';

// Redux
import * as actions from '../../store/modules/auth/actions';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { push } = useHistory();

  const handleLogout = event => {
    event.preventDefault();

    dispatch(actions.loginFailure());
    push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/register" title={isLoggedIn ? 'Alterar dados' : 'Criar conta'}>
        <FaUserAlt />
      </Link>

      {isLoggedIn ? (
        <>
          <Link to="" onClick={handleLogout} title="Sair">
            <FaPowerOff />
          </Link>
          <FaCircle color="#66ff33" />
        </>
      ) : (
        <Link to="/login" title="Fazer login">
          <FaSignInAlt />
        </Link>
      )}
    </Nav>
  );
}

export default Header;
