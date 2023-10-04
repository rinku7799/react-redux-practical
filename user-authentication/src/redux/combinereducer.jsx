

import { combineReducers } from "redux";
import Authentication from "./reducer";

const reducers = combineReducers({
    isUserLoggedIn: Authentication
})

export default reducers;