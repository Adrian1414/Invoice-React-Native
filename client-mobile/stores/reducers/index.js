import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";
import customerReducer from "./customerReducer";
const rootReducer = combineReducers({
    invoiceReducer,
    customerReducer
})

export default rootReducer