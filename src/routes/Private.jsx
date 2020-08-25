import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function Private({ component: Component, isClosed, ...rest }) {
  const { isLoggedIn } = useSelector(state => state.auth);

  if (isClosed && !isLoggedIn)
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );

  return <Route {...rest} component={Component} />;
}

Private.defaultProps = {
  isClosed: false,
};

Private.propTypes = {
  component: PropTypes.func.isRequired,
  isClosed: PropTypes.bool,
};

export default Private;
