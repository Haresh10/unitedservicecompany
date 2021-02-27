import { createSelector } from "reselect";
export const SelectOrders = (state) => state.order;
export const SelectInitialItems = createSelector(
  [SelectOrders],
  (order) => order.allItems
);
export const SelectOrderRows = createSelector(
  [SelectOrders],
  (order) => order.custOrder.selectedItems
);
export const SelectShippingAddress = createSelector(
  [SelectOrders],
  (order) => order.custOrder.address
);
export const SelectPaymentDetails = createSelector(
  [SelectOrders],
  (order) => order.custOrder.paymentDetails
);
