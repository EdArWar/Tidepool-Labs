import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postsData = createSelector([postSelector], (post) => post.postsData);

const postsNames = createSelector([postSelector], (post) => post.postsNames);

const updatePost = createSelector([postSelector], (post) => post.updatePost);

const selectors = { postsData, postsNames, updatePost };

export default selectors;
