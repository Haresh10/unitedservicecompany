import orderActionTypes from "./order.types";
import prepareObject from "./order.utils";
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
  custOrder: {
    selectedItems: [],
    address: {},
    paymentDetails: {},
  },
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderActionTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        custOrder: {
          ...state.custOrder,
          selectedItems: [...state.custOrder.selectedItems, action.payload],
        },
      };
    case orderActionTypes.SET_SELECTED_ITEMS:
      return {
        ...state,
        custOrder: { ...state.custOrder, selectedItems: action.payload },
      };
    case orderActionTypes.SET_SHIPPING_ADDRESS:
      return {
        ...state,
        custOrder: {
          ...state.custOrder,
          address: prepareObject(action.payload, "address"),
        },
      };
    case orderActionTypes.SET_PAYMENT_DETAILS:
      return {
        ...state,
        custOrder: {
          ...state.custOrder,
          paymentDetails: prepareObject(action.payload, "paymentDetails"),
        },
      };
    default:
      return state;
  }
};
export default OrderReducer;
