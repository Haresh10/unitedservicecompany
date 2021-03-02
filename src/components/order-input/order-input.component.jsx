import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./order-input.styles";
import {
  SelectInitialItems,
  SelectOrderRows,
} from "../../redux/order/order.selectors";
import { priceRow } from "../../utils/utils.component";
import { setSelectedItem } from "../../redux/order/order.actions";
import Controls from "../re-usables/controls";

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
          <Grid item xs={2}>
            <Controls.Select
              variant="outlined"
              label="Services"
              name="desc"
              value={id}
              onChange={handleSelectOptionChange}
              options={orderItems}
              required
            />
          </Grid>
          <Grid item xs={2}>
            <Controls.Input
              name="qty"
              label="Area/Qty."
              type="number"
              variant="outlined"
              size="small"
              value={qty}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={2}>
            <Controls.Input
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
          </Grid>
          <Grid item xs={2}>
            <Controls.Input
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
          </Grid>
          <Grid item xs={2}>
            <Controls.Input
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
          </Grid>
          <Grid item xs={2}>
            <Fab
              variant="outlined"
              size="medium"
              color="primary"
              aria-label="add"
              type="submit"
              className={classes.fabControl}
            >
              <AddIcon />
            </Fab>
          </Grid>
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
