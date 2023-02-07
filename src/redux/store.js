import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import { productAmountValidation } from "./middlewares/productAmountValidation";






const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(productAmountValidation)))

export default store
