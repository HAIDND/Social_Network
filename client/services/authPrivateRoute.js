import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './authHelper';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(prop) =>
            auth.isAuthencated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: prop.location } }} />
            )
        }
    />
);

export default PrivateRoute;
