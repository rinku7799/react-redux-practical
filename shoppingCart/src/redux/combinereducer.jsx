
import { combineReducers } from "redux";
import cartReducer from "./reducer";

const reducers = combineReducers({
    cart: cartReducer
})
export default reducers