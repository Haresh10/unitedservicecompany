import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SelectOrderRows } from "../../redux/order/order.selectors";
import {
  setSelectedItem,
  setSelectedItems,
} from "../../redux/order/order.actions";
import useStyles from "./spanning-table.styles";

const SpanningTable = ({ setSelectedItem, setSelectedItems, currentRows }) => {
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [editId, setEditId] = useState();
  const classes = useStyles();
  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, rate, disc) {
    return qty * rate - (qty * rate * disc) / 100;
  }
  const rows = currentRows.map((row) => {
    const { id, desc, qty, disc, unit, rate } = row;
    return createRow(id, desc, qty, disc, unit, rate);
  });
  function createRow(id, desc, qty, disc, unit, rate) {
    const price = priceRow(qty, rate, disc);
    return { id, desc, qty, disc, unit, rate, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const startEditHandler = (id) => {
    setCurrentlyEditing(true);
    setEditId(id);
  };
  const rowDeleteHandler = (id) => {
    setSelectedItems(currentRows.filter((row) => row.id !== id));
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newRows = currentRows.map((row) =>
      row.id === editId ? { ...row, [name]: value } : row
    );
    setSelectedItems(newRows);
  };
  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="spanning table"
        //padding="checkbox"
      >
        <TableHead>
          <TableRow className={classes.tableHeadTop}>
            <TableCell align="center" colSpan={6}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Area/Qty.</TableCell>
            <TableCell align="right">Discount %</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {currentlyEditing && editId === row.id ? (
                  <CheckSharpIcon onClick={() => setCurrentlyEditing(false)} />
                ) : (
                  <EditIcon onClick={() => startEditHandler(row.id)} />
                )}

                <DeleteIcon onClick={() => rowDeleteHandler(row.id)} />
              </TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">
                {currentlyEditing && row.id === editId ? (
                  <TextField
                    type="text"
                    name="qty"
                    value={row.qty}
                    onChange={changeHandler}
                    className={classes.input}
                  />
                ) : (
                  row.qty
                )}
              </TableCell>
              <TableCell align="right">{row.disc}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={4} />
            <TableCell rowSpan={4} />
            <TableCell colSpan={4}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Grand Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentRows: SelectOrderRows,
});
const mapDispatchToProps = (dispatch) => ({
  setSelectedItem: (item) => dispatch(setSelectedItem(item)),
  setSelectedItems: (items) => dispatch(setSelectedItems(items)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SpanningTable);
