import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postsData = createSelector([postSelector], (post) => post.postsData);

const postsNames = createSelector([postSelector], (post) => post.postsNames);

const selectors = { postsData, postsNames };

export default selectors;
