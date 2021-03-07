import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "../../components/re-usables/FormsControls/Textfield";

const AddressForm = (props) => {
  const {
    formField: {
      company,
      booth,
      address1,
      city,
      state,
      zip,
      phone,
      fax,
      ext,
      cname,
      cemail,
      cmobile,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={9} sm={9} md={9}>
          <TextField name={company.name} label={company.label} />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField name={booth.name} label={booth.label} />
        </Grid>
        <Grid item xs={12}>
          <TextField name={address1.name} label={address1.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={city.name} label={city.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={state.name} label={state.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={zip.name} label={zip.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={phone.name} label={phone.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={fax.name} label={fax.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={ext.name} label={ext.label} />
        </Grid>
        <Grid item xs={4}>
          <TextField name={cname.name} label={cname.label} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField name={cemail.name} label={cemail.label} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField name={cmobile.name} label={cmobile.label} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
