import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { setShippingAddress } from "../../redux/order/order.actions";
import { TextField } from "@material-ui/core";
const AddressForm = (props) => {
  const { shippingAddress, setShippingAddress } = props;
  const {
    company,
    address1,
    booth,
    city,
    state,
    zip,
    phone,
    fax,
    ext,
    cname,
    cemail,
    cmobile,
  } = shippingAddress;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={9} sm={9} md={9}>
          <TextField
            variant="outlined"
            required
            id="companyName"
            type="text"
            name="company"
            label="Exhibiting Company Name"
            onChange={handleChange}
            value={company}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField
            variant="outlined"
            required
            type="number"
            id="booth"
            name="booth"
            label="Booth"
            onChange={handleChange}
            value={booth}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            type="text"
            id="address1"
            name="address1"
            label="Street Address"
            onChange={handleChange}
            value={address1}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="city"
            type="text"
            name="city"
            label="City"
            onChange={handleChange}
            value={city}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            id="state"
            name="state"
            type="text"
            label="State"
            onChange={handleChange}
            value={state}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="zip"
            name="zip"
            type="number"
            label="Postal code"
            onChange={handleChange}
            value={zip}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="phone"
            type="text"
            name="phone"
            label="Phone"
            onChange={handleChange}
            value={phone}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="fax"
            type="text"
            name="fax"
            label="Fax"
            onChange={handleChange}
            value={fax}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="ext"
            type="number"
            name="ext"
            label="Ext"
            onChange={handleChange}
            value={ext}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="printname"
            type="text"
            name="cname"
            label="Print Name"
            onChange={handleChange}
            value={cname}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            required
            id="cemail"
            type="email"
            name="cemail"
            label="Contact's Email"
            onChange={handleChange}
            value={cemail}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            required
            id="mobile"
            type="number"
            name="cmobile"
            label="Contact's Mobile"
            onChange={handleChange}
            value={cmobile}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setShippingAddress: (address) => dispatch(setShippingAddress(address)),
});
export default connect(null, mapDispatchToProps)(AddressForm);
