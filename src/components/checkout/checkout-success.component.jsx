import React from "react";
import { Typography } from "@material-ui/core";
const CheckoutSuccess = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539.
      </Typography>
    </React.Fragment>
  );
};
export default CheckoutSuccess;
