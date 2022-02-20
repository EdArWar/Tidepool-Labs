import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const loader = createSelector([globalSelector], (global) => global.loader);

const updatePost = createSelector(
  [globalSelector],
  (global) => global.updatePost
);

const selectors = { loader, updatePost };

export default selectors;
