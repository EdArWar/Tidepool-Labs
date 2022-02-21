import { postSlice } from "./postSlice";

const { setAllPost, setAllPostsNames } = postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

const handleSetAllPostsNames = (state) => (dispatch) => {
  dispatch(setAllPostsNames(state));
};

const operations = {
  handleSetAllPost,
  handleSetAllPostsNames,
};

export default operations;
