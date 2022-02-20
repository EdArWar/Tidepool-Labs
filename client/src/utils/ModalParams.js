export function getModalParams(modalName) {
  switch (modalName) {
    case MODAL_NAME.POST_UPDATE:
      return { updatePost: true, title: "Post Update" };
    case MODAL_NAME.POST_REMOVE:
      return { removePost: true, title: "Post Remove" };

    default:
      break;
  }
}

export const MODAL_NAME = {
  POST_UPDATE: "Update Post",
  POST_REMOVE: "Remove Post",
};
