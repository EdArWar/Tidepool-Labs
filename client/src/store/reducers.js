import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalSlice } from "./global/globalSlice";
import { modalSlice } from "./modal/modalSlice";
import { postSlice } from "./post/postSlice";

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  post: postSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
