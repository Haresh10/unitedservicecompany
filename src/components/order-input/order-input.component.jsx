import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./order-input.styles.scss";
import {
  SelectInitialItems,
  SelectOrderRows,
} from "../../redux/order/order.selectors";
import { setSelectedItem } from "../../redux/order/order.actions";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const OrderInputForm = ({ currentRows, initialRows, setSelectedItem }) => {
  const classes = useStyles();
  const INITIAL_ORDERITEM = {
    id: "",
    desc: "",
    qty: "",
    disc: "",
    unit: "",
    rate: "",
  };
  const [orderItems, setOrderItems] = useState([]);
  const [orderItem, setOrderItem] = useState(INITIAL_ORDERITEM);

  useEffect(() => {
    setOrderItems(initialRows);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderItem({ ...orderItem, [name]: value });
  };
  const handleSubmit = (e) => {
    let isMatch = false;
    e.preventDefault();
    currentRows.find((row) => {
      if (row.id === orderItem.id) {
        isMatch = true;
      }
      return "";
    });
    !isMatch
      ? setSelectedItem(orderItem)
      : alert("Order Already Exists!, Please edit the same!");
    setOrderItem(INITIAL_ORDERITEM);
  };
  const handleSelectOptionChange = (e) => {
    if (
      e.target.value === "" ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setOrderItem(INITIAL_ORDERITEM);
      return;
    }
    const { value } = e.target;
    const newOrderItem = orderItems.find(
      (row) => parseInt(row.id) === parseInt(value)
    );
    setOrderItem(newOrderItem);
  };
  const { id, qty, disc, unit, rate } = orderItem;
  return (
    <div onSubmit={handleSubmit} className="order-form-container">
      <form className="order-form" noValidate autoComplete="off">
        <FormControl variant="filled" className={classes.formControl}>
          <NativeSelect
            variant="filled"
            value={id || ""}
            name="desc"
            onChange={handleSelectOptionChange}
            inputProps={{ "aria-label": "services" }}
          >
            <option value="">Select</option>
            {orderItems.map((row) => (
              <option value={row.id} key={row.id}>
                {row.desc}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <FormControl>
          <TextField
            name="qty"
            label="Area/Qty."
            type="text"
            variant="outlined"
            size="small"
            value={qty}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            name="disc"
            label="Discount"
            variant="outlined"
            size="small"
            disabled
            InputProps={{
              readOnly: true,
            }}
            value={disc}
          />
        </FormControl>
        <FormControl>
          <TextField
            name="unit"
            label="Unit"
            variant="outlined"
            size="small"
            disabled
            InputProps={{
              readOnly: true,
            }}
            value={unit}
          />
        </FormControl>
        <FormControl>
          <TextField
            name="rate"
            label="Price"
            variant="outlined"
            size="small"
            disabled
            InputProps={{
              readOnly: true,
            }}
            value={rate}
          />
        </FormControl>
        <FormControl>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            type="submit"
          >
            <AddIcon />
          </Fab>
        </FormControl>
      </form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  initialRows: SelectInitialItems,
  currentRows: SelectOrderRows,
});
const mapDispatchToProps = (dispatch) => ({
  setSelectedItem: (item) => dispatch(setSelectedItem({ ...item })),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderInputForm);
