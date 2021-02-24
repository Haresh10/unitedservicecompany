const INITIAL_STATE = {
  rows: [
    {
      id: 1,
      desc: "Booth Vacuuming",
      qty: 100,
      disc: 5,
      unit: "sq.ft",
      rate: 1.15,
    },
    { id: 2, desc: "Damp-mop", qty: 10, disc: 5, unit: "sq.ft", rate: 45.99 },
    {
      id: 3,
      desc: "Shampoo Service",
      qty: 2,
      disc: 5,
      unit: "sq.ft",
      rate: 17.99,
    },
  ],
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default OrderReducer;
