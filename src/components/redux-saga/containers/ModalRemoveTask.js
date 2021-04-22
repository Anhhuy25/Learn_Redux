import React from "react";
import { Box, Button } from "@material-ui/core";

function ModalRemoveTask({ id, title, closeModal, taskRemove }) {
  const handleDeleteTask = (id) => {
    taskRemove(id);
    closeModal();
  };

  return (
    <div className='modal_delete'>
      <div className='modal_delete_confirm'>
        Bạn chắc chắn muốn xóa <span style={{ fontWeight: "bold" }}>{title}</span>?
      </div>
      <Box display='flex' flexDirection='row-reverse' mt={2}>
        <Box ml={1}>
          <Button variant='contained' onClick={closeModal}>
            No
          </Button>
        </Box>
        <Box>
          <Button variant='contained' color='primary' onClick={() => handleDeleteTask(id)}>
            Yes
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ModalRemoveTask;
