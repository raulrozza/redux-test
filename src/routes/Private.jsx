import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function Private({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

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
  component: PropTypes.node.isRequired,
  isClosed: PropTypes.bool,
};

export default Private;
