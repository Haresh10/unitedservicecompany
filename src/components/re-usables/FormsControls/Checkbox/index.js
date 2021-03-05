import React from "react";
import {
  CheckBox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";
const CheckBoxWrapper = ({ name, label, legend, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e) => {
    setFieldValue(name, e.target.checked);
  };
  const configCheckbox = {
    ...otherProps,
    ...field,
    onChange: handleChange,
  };
  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<CheckBox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};
export default CheckBoxWrapper;
