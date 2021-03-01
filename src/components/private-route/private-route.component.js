import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCurrentUser } from "../../redux/user/user.selectors";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to={`/signin`} />
      }
    ></Route>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
export default connect(mapStateToProps)(PrivateRoute);
