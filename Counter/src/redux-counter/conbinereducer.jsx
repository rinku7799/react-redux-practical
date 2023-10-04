
import { combineReducers } from "redux";
import counterReducer from "./reducer";

const reducer = combineReducers({
    counter: counterReducer
})

export default reducer;