/**
 * 
 * Authenticated Route
 * We look at the passed in props to check if a user is authenticated. Based on that, we render the passed in
 * component or redirect the user to a different route / component of our choosing.
 * 
 */

// Will be used later when we implement authentication 

// External Packages
import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect
            to="/adminLogin"
          />}
  />;
