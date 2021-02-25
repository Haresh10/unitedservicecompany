import orderActionTypes from "./order.types";
const INITIAL_STATE = {
  allItems: [
    {
      id: 1,
      desc: "Booth Vacuuming",
      qty: "",
      disc: 5,
      unit: "sq.ft",
      rate: 1.15,
    },
    { id: 2, desc: "Damp-mop", qty: "", disc: 5, unit: "sq.ft", rate: 45.99 },
    {
      id: 3,
      desc: "Shampoo Service",
      qty: "",
      disc: 5,
      unit: "sq.ft",
      rate: 17.99,
    },
  ],
  selectedItems: [],
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderActionTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case orderActionTypes.SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload,
      };
    default:
      return state;
  }
};
export default OrderReducer;
