import { searchSlice } from "./searchSlice";

const { setAllSearch } = searchSlice.actions;

const handleSetAllSearch = (data) => (dispatch) => {
  dispatch(setAllSearch(data));
};

const operations = {
  handleSetAllSearch,
};

export default operations;
