import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import SpanningTable from "../../components/spanning-table/spanning-table.component";
import OrderInputForm from "../../components/order-input/order-input.component";
import { SelectCurrentUser } from "../../redux/user/user.selectors";
const OrderScreen = ({ currentUser, history }) => {
  useEffect(() => {
    if (!currentUser) {
      history.push("/");
    }
  }, [currentUser]);
  return (
    <div>
      <OrderInputForm />
      <SpanningTable history={history} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
export default connect(mapStateToProps)(OrderScreen);
