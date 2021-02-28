import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Copyright } from "./checkout.utils";
import { useStyles } from "./checkout.styles";
import AddressForm from "./address.component";
import PaymentForm from "./paymentform.component";
import Review from "./reviewform.component";
import {
  SelectOrderRows,
  SelectShippingAddress,
  SelectPaymentDetails,
} from "../../redux/order/order.selectors";

const steps = ["Shipping address", "Payment details", "Review your order"];

const Checkout = ({ history, orderItems, shippingAddress, paymentDetails }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm shippingAddress={shippingAddress} />;
      case 1:
        return <PaymentForm paymentDetails={paymentDetails} />;
      case 2:
        return (
          <Review
            shippingAddress={shippingAddress}
            paymentDetails={paymentDetails}
            orderItems={orderItems}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      alert("Data will be store in database...");
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleCustomBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep === 0 && (
                    <Button
                      onClick={handleCustomBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  orderItems: SelectOrderRows,
  shippingAddress: SelectShippingAddress,
  paymentDetails: SelectPaymentDetails,
});

export default connect(mapStateToProps)(Checkout);
