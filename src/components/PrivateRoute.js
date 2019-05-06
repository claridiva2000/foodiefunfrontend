import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  token,
  errorStatusCode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ token, errorStatusCode }) => ({
  token
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
