import React from 'react';
import { Meteor } from 'meteor/meteor';

import { Redirect, Route } from 'react-router-dom';

const LogOutRoute = ({
  component: Component,
  componentProps = {},
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(renderProps) => (!Meteor.userId() ? (
      <Component {...componentProps} {...renderProps} />
    ) : (
      <Redirect to="/" />
    ))}
  />
);

export default LogOutRoute;
