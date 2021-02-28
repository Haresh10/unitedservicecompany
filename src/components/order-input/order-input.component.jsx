import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useStyles } from "./order-input.styles";
import {
  SelectInitialItems,
  SelectOrderRows,
} from "../../redux/order/order.selectors";
import { priceRow } from "../../utils/utils.component";
import { setSelectedItem } from "../../redux/order/order.actions";

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
    const numberValue = value.replace(/[^0-9]/g, "");
    setOrderItem({ ...orderItem, [name]: numberValue });
  };

  const handleSubmit = (e) => {
    let isMatch = false;
    e.preventDefault();
    currentRows.find((row) => {
      if (row.id === orderItem.id) {
        isMatch = true;
      }
      return isMatch;
    });
    if (isMatch) {
      alert("Service already exists in your order!");
    } else {
      const { qty, rate, disc } = orderItem;
      const currentPrice = priceRow(qty, rate, disc);
      setSelectedItem({ ...orderItem, price: currentPrice });
    }
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
    <div onSubmit={handleSubmit}>
      <form className={classes.orderForm} autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                className={classes.selectEmpty}
                variant="filled"
                value={id || ""}
                name="desc"
                onChange={handleSelectOptionChange}
                inputProps={{ "aria-label": "services" }}
                required
              >
                <option value="">Select</option>
                {orderItems.map((row) => (
                  <option value={row.id} key={row.id}>
                    {row.desc}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={2}>
            <FormControl className={classes.formControl}>
              <TextField
                name="qty"
                label="Area/Qty."
                type="number"
                variant="outlined"
                size="small"
                value={qty}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={2}>
            <FormControl className={classes.formControl}>
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
          </Grid>
          <Grid item xs={2} sm={2}>
            <FormControl className={classes.formControl}>
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
          </Grid>
          <Grid item xs={1} sm={2}>
            <FormControl className={classes.formControl}>
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
          </Grid>
          <FormControl className={classes.fabControl}>
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
        </Grid>
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
