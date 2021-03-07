import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldWrapper = ({ name, label, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextfield = {
    fullWidth: true,
    variant: "outlined",
    label,
    ...field,
    ...otherProps,
  };
  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }
  return <TextField {...configTextfield} />;
};
export default TextFieldWrapper;
