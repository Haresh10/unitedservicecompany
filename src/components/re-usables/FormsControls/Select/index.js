import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };
  const configSelect = {
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
    ...otherProps,
    ...field,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  <TextField {...configSelect}>
    {Object.keys(options).map((item, pos) => {
      <MenuItem key={pos} value={item}>
        {options[item]}
      </MenuItem>;
    })}
  </TextField>;
};
export default SelectWrapper;
