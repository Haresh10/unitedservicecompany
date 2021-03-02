import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    
    "& .MuiSelect-select": {
      width: theme.spacing(12),
    },
  },
  input: {
    padding: "11px 14px",
  },
}));
export default function Select(props) {
  const classes = useStyles();
  const { value, name, onChange, options, label, ...otherProps } = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel margin="dense">{label}</InputLabel>
      <MuiSelect
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        {...otherProps}
        input={<OutlinedInput classes={{ input: classes.input }} fullWidth />}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item) => {
          return (
            <MenuItem value={item.id} key={item.id}>
              {item.desc}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
}
