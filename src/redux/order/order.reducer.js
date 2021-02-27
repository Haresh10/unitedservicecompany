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
  custOrder: {
    selectedItems: [],
    address: {
      company: "",
      address1: "",
      booth: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      fax: "",
      ext: "",
      cname: "",
      cemail: "",
      cmobile: "",
    },
    paymentDetails: {
      cctype: "",
      ccname: "",
      ccnum: "",
      ccexpdate: "",
      cvv: "",
    },
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
        custOrder: { ...state.custOrder, address: action.payload },
      };
    case orderActionTypes.SET_PAYMENT_DETAILS:
      return {
        ...state,
        custOrder: { ...state.custOrder, paymentDetails: action.payload },
      };
    default:
      return state;
  }
};
export default OrderReducer;
