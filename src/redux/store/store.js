import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import employeesReducer from "../reducer/employeesReducer";

export const store = createStore(employeesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
