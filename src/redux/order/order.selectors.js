import { createSelector } from "reselect";
export const SelectOrders = (state) => state.order;
export const SelectOrderRows = createSelector(
  [SelectOrders],
  (order) => order.selectedItems
);
export const SelectInitialItems = createSelector(
  [SelectOrders],
  (order) => order.allItems
);
