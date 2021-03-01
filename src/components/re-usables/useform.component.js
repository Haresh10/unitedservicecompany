import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleChange,
  };
}
const useStyles = makeStyles((theme) => ({
  "& .MuiFormControl-root": {
    width: "80%",
    margin: theme.spacing(1),
  },
}));
export function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" autoCapitalize="off">
      {props.children}
    </form>
  );
}
