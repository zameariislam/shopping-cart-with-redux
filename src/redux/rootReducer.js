import { combineReducers } from "redux";

import counterReducer from "./counter/counterReducer";
import counterDynamicReducer from "./dynamicCounter/counterDynamicReducer";



const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: counterDynamicReducer
})

export default rootReducer