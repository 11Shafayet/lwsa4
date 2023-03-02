import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./bookReducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(bookReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
