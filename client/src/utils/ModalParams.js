export function getModalParams(modalName) {
  switch (modalName) {
    case MODAL_NAME.SIGN_IN:
      return { signIn: true, title: "Sign In" };
    case MODAL_NAME.POST_UPDATE:
      return { updatePost: true, title: "Post Update" };
    case MODAL_NAME.POST_REMOVE:
      return { removePost: true, title: "Post Remove" };
    default:
      break;
  }
}

export const MODAL_NAME = {
  SIGN_IN: "Sign In",
  POST_UPDATE: "Update Post",
  POST_REMOVE: "Remove Post",
};
