import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { setPaymentDetails } from "../../redux/order/order.actions";
import { connect } from "react-redux";

const PaymentForm = ({ paymentDetails, setPaymentDetails }) => {
  const { cctype, ccname, ccnum, ccexpdate, cvv } = paymentDetails;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            required
            id="cardType"
            label="Card Type"
            name="cctype"
            type="text"
            value={cctype}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-type"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cardName"
            label="Name on card"
            name="ccname"
            type="text"
            value={ccname}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cardNumber"
            label="Card number"
            name="ccnum"
            type="text"
            value={ccnum}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="expDate"
            label="Expiry date"
            name="ccexpdate"
            type="text"
            value={ccexpdate}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            name="cvv"
            type="password"
            value={cvv}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setPaymentDetails: (paymentDetails) =>
    dispatch(setPaymentDetails(paymentDetails)),
});
export default connect(null, mapDispatchToProps)(PaymentForm);
