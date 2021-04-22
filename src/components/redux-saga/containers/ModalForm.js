import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Modal } from "@material-ui/core";
import { connect } from "react-redux";
import { closeModal } from "../../../redux/redux-saga/fetchTasks";
import "../style.css";

function ModalForm({ title, closeModal, isShow, component }) {
  return (
    <Modal open={isShow} onClose={closeModal}>
      <div className='modal'>
        <div className='modal_title'>
          <h2>{title}</h2>
          <CloseIcon className='modal_closeicon' onClick={closeModal} />
        </div>
        <div className='modal_content'>{component}</div>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return { title: state.modal.title, isShow: state.modal.isShow, component: state.modal.component };
};

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
