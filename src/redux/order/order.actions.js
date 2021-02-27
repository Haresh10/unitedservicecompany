import orderActionTypes from "./order.types";

export const setSelectedItem = (newServiceItem) => ({
  type: orderActionTypes.SET_SELECTED_ITEM,
  payload: newServiceItem,
});
export const setSelectedItems = (editedServiceItems) => ({
  type: orderActionTypes.SET_SELECTED_ITEMS,
  payload: editedServiceItems,
});
export const setShippingAddress = (address) => ({
  type: orderActionTypes.SET_SHIPPING_ADDRESS,
  payload: address,
});
export const setPaymentDetails = (paymentDetails) => ({
  type: orderActionTypes.SET_PAYMENT_DETAILS,
  payload: paymentDetails,
});
