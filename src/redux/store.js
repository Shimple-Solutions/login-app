import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer";

const reducers = combineReducers({
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store