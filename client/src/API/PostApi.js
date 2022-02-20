import axios from "axios";
import { globalOp } from "../store/global";
import { modalOp } from "../store/modal";
import { postOp } from "../store/post";
import { API } from "./API";

class PostApi {
  createPost_api(name, profession, avatar) {
    return async (dispatch) => {
      try {
        const body = {
          name,
          profession,
          avatar,
        };

        const response = await axios.post(`${API}posts/create`, body);

        const data = response.data;
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };
  }

  updatePost_api(id, name, profession, avatar, setUpdateButtonState) {
    return async (dispatch) => {
      setUpdateButtonState(true);
      try {
        const body = {
          id,
          name,
          profession,
          avatar,
        };

        const response = await axios.patch(`${API}posts/update`, body);
        const data = response.data;
        dispatch(modalOp.handleSetModalState(null));

        dispatch(postOp.handleUpdatePost(data.updatePost));
      } catch (error) {
        console.log(error);
      } finally {
        setUpdateButtonState(false);
      }
    };
  }

  getAllPosts_api() {
    return async (dispatch) => {
      try {
        dispatch(globalOp.handleLoaderState(true));
        const response = await axios.get(`${API}posts/`);
        const data = response.data;
        console.log("data", data);
        dispatch(postOp.handleSetAllPost(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(globalOp.handleLoaderState(false));
      }
    };
  }
}

export default new PostApi();
