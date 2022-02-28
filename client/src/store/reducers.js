import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalSlice } from "./global/globalSlice";
import { modalSlice } from "./modal/modalSlice";
import { postSlice } from "./post/postSlice";
import { searchSlice } from "./search/searchSlice";
import { userSlice } from "./user/userSlice";

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  user: userSlice.reducer,
  post: postSlice.reducer,
  modal: modalSlice.reducer,
  search: searchSlice.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
