import { createSelector } from "reselect";
export const SelectOrders = (state) => state.order;
export const SelectOrderRows = createSelector(
  [SelectOrders],
  (order) => order.rows
);
