import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = true; // Can change it, as per your usage

export const PrivateRoute = ({
    component: Component, // aliasing
    ...rest
}) => (
        <Route
            {...rest}
            component={
                (props) => isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    );