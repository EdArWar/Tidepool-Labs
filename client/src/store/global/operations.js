import { globalSlice } from "./globalSlice";

const { setLoader } = globalSlice.actions;

const handleLoaderState = (state) => (dispatch) => {
  dispatch(setLoader(state));
};

const operations = {
  handleLoaderState,
};

export default operations;
