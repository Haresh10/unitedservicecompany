import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "../../components/re-usables/FormsControls/Textfield";
import Checkbox from "../../components/re-usables/FormsControls/Checkbox";
import DateTimePicker from "../../components/re-usables/FormsControls/DateTimePicker";
const PaymentForm = (props) => {
  const {
    formField: { cardType, nameOnCard, cardNumber, expiryDate, cvv },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField label={cardType.label} name={cardType.name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label={nameOnCard.label} name={nameOnCard.name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label={cardNumber.label} name={cardNumber.name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateTimePicker label={expiryDate.label} name={expiryDate.name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label={cvv.label} name={cvv.name} />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            name="saveCard"
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
