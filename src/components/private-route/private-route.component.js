import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
