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
import PageNotFound from "../page-not-found/pagenotfound.component";
import { Copyright } from "./checkout.utils";
import { useStyles } from "./checkout.styles";
import AddressForm from "./address.component";
import PaymentForm from "./paymentform.component";
import Review from "./reviewform.component";
import CheckoutSuccess from "./checkout-success.component";
import {
  SelectOrderRows,
  SelectShippingAddress,
  SelectPaymentDetails,
} from "../../redux/order/order.selectors";
import {
  setPaymentDetails,
  setShippingAddress,
} from "../../redux/order/order.actions";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
const steps = ["Shipping address", "Payment details", "Review your order"];
const { fieldId, formField } = checkoutFormModel;

const Checkout = ({
  history,
  setPaymentDetails,
  setShippingAddress,
  orderItems,
  shippingAddress,
  paymentDetails,
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formField={formField} />;
      case 1:
        return <PaymentForm formField={formField} />;
      case 2:
        return (
          <Review
            shippingAddress={shippingAddress}
            paymentDetails={paymentDetails}
            orderItems={orderItems}
          />
        );
      default:
        return <PageNotFound />;
    }
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function _submitForm(values, actions) {
    await _sleep(1000);
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      switch (activeStep) {
        case 0:
          setShippingAddress(values);
          break;
        case 1:
          setPaymentDetails(values);
          break;
        default:
          break;
      }
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
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
              <CheckoutSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={fieldId}>
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
                        disabled={isSubmitting}
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
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
const mapDispatchToProps = (dispatch) => ({
  setShippingAddress: (values) => dispatch(setShippingAddress(values)),
  setPaymentDetails: (values) => dispatch(setPaymentDetails(values)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
