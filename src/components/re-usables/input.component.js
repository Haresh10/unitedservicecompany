import { FormControl, TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange, ...otherProps } = props;
  return (
    <FormControl>
      <TextField
        variant="outlined"
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        {...otherProps}
      />
    </FormControl>
  );
}
