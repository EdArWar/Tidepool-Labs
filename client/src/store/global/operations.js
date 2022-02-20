import { globalSlice } from "./globalSlice";

const { setLoader, setUpdatePost } = globalSlice.actions;

const handleLoaderState = (state) => (dispatch) => {
  dispatch(setLoader(state));
};

const handleSetUpdatePost = (state) => (dispatch) => {
  dispatch(setUpdatePost(state));
};

const operations = {
  handleLoaderState,
  handleSetUpdatePost,
};

export default operations;
