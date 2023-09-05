import { createStore, combineReducers } from "redux";
import { dataReducer } from "../reducers";

const rootReducer = combineReducers({
  myProducts: dataReducer,
});

export const store = createStore(rootReducer);
