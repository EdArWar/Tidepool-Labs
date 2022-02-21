import { createSelector } from "reselect";

const searchSelector = (state) => state.search;

const searchData = createSelector(
  [searchSelector],
  (search) => search.searchData
);

const selectors = { searchData };

export default selectors;
