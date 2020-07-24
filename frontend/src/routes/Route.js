import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = true,
  isVerified = false,
  ...rest
}) {

  const { signed } = store.getState().auth;
  const Layout = DefaultLayout;

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }


  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isVerified: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isVerified: false,
};
