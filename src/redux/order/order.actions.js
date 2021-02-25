import orderActionTypes from "./order.types";

export const setSelectedItem = (newServiceItem) => ({
  type: orderActionTypes.SET_SELECTED_ITEM,
  payload: newServiceItem,
});
export const setSelectedItems = (editedServiceItems) => ({
  type: orderActionTypes.SET_SELECTED_ITEMS,
  payload: editedServiceItems,
});
