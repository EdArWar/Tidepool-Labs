import { searchSlice } from "./searchSlice";

const { setAllSearch, setPromptFiledState } = searchSlice.actions;

const handleSetAllSearch = (data) => (dispatch) => {
  dispatch(setAllSearch(data));
};

const handleSetPromptFiledState = (state) => (dispatch) => {
  dispatch(setPromptFiledState(state));
};

const operations = {
  handleSetAllSearch,
  handleSetPromptFiledState,
};

export default operations;
