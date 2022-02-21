import { postSlice } from "./postSlice";

const { setAllPost, setAllPostsNames, updatePost, setUpdatePost } =
  postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

const handleSetAllPostsNames = (state) => (dispatch) => {
  dispatch(setAllPostsNames(state));
};

const handleUpdatePost = (state) => (dispatch) => {
  dispatch(updatePost(state));
};

const handleSetUpdatePost = (state) => (dispatch) => {
  dispatch(setUpdatePost(state));
};

const operations = {
  handleSetAllPost,
  handleSetAllPostsNames,
  handleUpdatePost,
  handleSetUpdatePost,
};

export default operations;
