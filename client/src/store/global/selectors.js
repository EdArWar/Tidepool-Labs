import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const loader = createSelector([globalSelector], (global) => global.loader);

const selectors = { loader };

export default selectors;
