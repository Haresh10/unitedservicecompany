import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./order-screen.styles";

import SpanningTable from "../../components/spanning-table/spanning-table.component";
import OrderInputForm from "../../components/order-input/order-input.component";
import { SelectCurrentUser } from "../../redux/user/user.selectors";
const OrderScreen = ({ currentUser, history }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!currentUser) {
      history.push("/");
    }
  }, [currentUser]);
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <OrderInputForm />
        <SpanningTable history={history} />
      </Paper>
      <CssBaseline />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
export default connect(mapStateToProps)(OrderScreen);
