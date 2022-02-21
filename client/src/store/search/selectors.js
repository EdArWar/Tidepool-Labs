import { createSelector } from "reselect";

const searchSelector = (state) => state.search;

const searchData = createSelector(
  [searchSelector],
  (search) => search.searchData
);

const promptFiled = createSelector(
  [searchSelector],
  (search) => search.promptFiled
);

const selectors = { searchData, promptFiled };

export default selectors;
