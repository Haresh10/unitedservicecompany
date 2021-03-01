import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textAlign: "center",
    color: "dodgerblue",
  },

  googleSignin: {
    width: 180,
    height: "auto",
    marginBottom: 17,
  },
  facebookSignin: {
    width: 205,
    height: "auto",
  },
}));

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://unitedhq.com/">
        United Service Companies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
