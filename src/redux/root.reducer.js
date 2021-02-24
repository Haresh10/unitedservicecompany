import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import OrderReducer from "./order/order.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  order: OrderReducer,
});
export default rootReducer;
