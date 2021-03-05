import React, { useState } from "react";
import {
  Paper,
  CssBaseline,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { passwordReset } from "../../firebase/firebase.utils";
import TextField from "../../components/re-usables/FormsControls/Textfield";
import Button from "../../components/re-usables/FormsControls/Submit";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const useStyles = makeStyles((theme) => ({
  layout: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    color: "secondary",
  },
}));
const resetAccountSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
const ResetPassword = ({ history }) => {
  const [response, setResponse] = useState();
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={resetAccountSchema}
          onSubmit={(values) => {
            passwordReset(values.email, setResponse);
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <span align="left">
                <Button
                  onClick={() => {
                    history.goBack();
                  }}
                  color="secondary"
                >
                  <KeyboardBackspaceIcon />
                  Back
                </Button>
              </span>
              <Grid item xs={12}>
                <Typography variant="h5" color="primary" align="center">
                  Reset Password
                </Typography>
              </Grid>
              {!response && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="center"
                    >
                      Enter the email associated with your account. We will send
                      an email with instructions to reset your password.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Email Address" name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Reset Password</Button>
                  </Grid>
                </React.Fragment>
              )}
              <React.Fragment>
                <Grid item xs={12}>
                  <Typography variant="h6" color="textSecondary" align="center">
                    {response}
                  </Typography>
                </Grid>
              </React.Fragment>
            </Grid>
          </Form>
        </Formik>
      </Paper>
      <CssBaseline />
    </div>
  );
};
export default ResetPassword;
