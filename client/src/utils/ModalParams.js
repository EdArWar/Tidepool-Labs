export function getModalParams(modalName) {
  switch (modalName) {
    case MODAL_NAME.POST_UPDATE:
      return { updatePost: true, title: "Post Update" };

    default:
      break;
  }
}

export const MODAL_NAME = {
  POST_UPDATE: "Update Post",
};
