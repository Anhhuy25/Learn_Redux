import React from "react";
import { Grid, Box, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { closeModal, addTaskRequest, updateTaskRequest } from "../../../redux/redux-saga/fetchTasks";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import MaterialUIForm from "./MaterialUIForm";
import validate from "./validate";

function TaskForm({ closeModal, handleSubmit, invalid, submitting, addTaskRequest, updateTaskRequest, isEdit }) {
  const submit = (value) => {
    const { title, description } = value;
    if (isEdit && isEdit.id) {
      updateTaskRequest(title, description);
    } else {
      addTaskRequest(title, description);
      closeModal();
    }
    // addTaskRequest(title, description);
    // updateTaskRequest(isEdit.id, title, description);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Grid container>
        <Grid item md={12}>
          <Field
            style={{ width: "100%" }}
            id='title'
            label='Title'
            margin='normal'
            name='title'
            component={MaterialUIForm}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            style={{ width: "100%" }}
            id='description'
            label='Description'
            margin='normal'
            name='description'
            component={MaterialUIForm}
          />
        </Grid>
        <Grid item md={12}>
          <Box display='flex' flexDirection='row-reverse' mt={2}>
            <Box ml={1}>
              <Button variant='contained' onClick={closeModal}>
                Cancel
              </Button>
            </Box>
            <Button disabled={invalid || submitting} variant='contained' color='primary' type='submit'>
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      title: state.tasks.isEdit ? state.tasks.isEdit.title : null,
      description: state.tasks.isEdit ? state.tasks.isEdit.description : null,
    },
    isEdit: state.tasks.isEdit,
  };
};

const mapDispatchToProps = {
  closeModal,
  addTaskRequest,
  updateTaskRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({ form: "TaskForm", validate });

export default compose(withConnect, withReduxForm)(TaskForm);
