import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "../components/modal/ModalCustom";
import UpdatePostComponent from "../components/postUpdate/UpdatePostComponent";
import { modalOp, modalSel } from "../store/modal";
import { isNotEmpty } from "../utils/Utils";

const LayoutModals = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(modalSel.modalState);

  return (
    <>
      <ModalCustom
        show={isNotEmpty(modalState)}
        onHide={() => {
          dispatch(modalOp.handleSetModalState(null));
        }}
        title={modalState?.title}
      >
        {modalState?.updatePost && <UpdatePostComponent />}
      </ModalCustom>
    </>
  );
};

export default LayoutModals;
