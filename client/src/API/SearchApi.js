import axios from "axios";
import { globalOp } from "../store/global";
import { searchOp } from "../store/search";
import { API } from "./API";

class SearchApi {
  getSearchWords_api() {
    return async (dispatch) => {
      try {
        dispatch(globalOp.handleLoaderState(true));
        const response = await axios.get(`${API}search`);
        const data = response.data;

        dispatch(searchOp.handleSetAllSearch(data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(globalOp.handleLoaderState(false));
      }
    };
  }
}

export default new SearchApi();
