import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Loading from "../components/Loading";
import SearchBox from "../components/SearchBox";
import {
  showModal,
  changeModalTitle,
  changeModalContent,
  taskEdit,
  removeTaskRequest,
  closeModal,
} from "../../../redux/redux-saga/fetchTasks";
import ModalForm from "./ModalForm";
import ModalRemoveTask from "./ModalRemoveTask";

const listTasksStatus = [
  { id: 1, status: "NEW" },
  { id: 2, status: "IN PROGRESS" },
  { id: 3, status: "COMPLETED" },
];

function Taskboard({
  listTasks,
  isLoading,
  isShow,
  showModal,
  closeModal,
  changeModalTitle,
  changeModalContent,
  taskEdit,
  removeTaskRequest,
}) {
  const showModalFunc = () => {
    taskEdit(null);
    showModal();
    changeModalTitle("ADD NEW TASK");
    changeModalContent(<TaskForm />);
  };

  const taskEditing = (value) => {
    showModal();
    changeModalTitle("EDIT TASK");
    changeModalContent(<TaskForm />);
    taskEdit(value);
  };

  const taskRemove = (value) => {
    removeTaskRequest(value);
  };

  const showModalRemoveTask = (id, title) => {
    showModal();
    changeModalTitle("REMOVE TASK");
    changeModalContent(<ModalRemoveTask id={id} title={title} closeModal={closeModal} taskRemove={taskRemove} />);
  };

  return (
    <div>
      <Button style={{ marginRight: "12px" }} variant='contained' color='primary'>
        {/* onClick={fetchTasksRequest} */}
        Load Data
      </Button>
      <Button variant='contained' color='primary' onClick={showModalFunc}>
        <AddIcon /> Add new task
      </Button>
      {isShow && <ModalForm />}
      <SearchBox />
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          {listTasksStatus.map((item) => {
            const filterTask = listTasks.filter((task) => task.status === item.status);
            return (
              <TaskList
                taskEditing={taskEditing}
                taskRemove={taskRemove}
                showModalRemoveTask={showModalRemoveTask}
                key={item.id}
                filterTask={filterTask}
                {...item}
              />
            );
          })}
        </Grid>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listTasks: state.tasks.listTasks,
    isLoading: state.loading.isLoading,
    isShow: state.modal.isShow,
  };
};

const mapDispatchToProps = {
  // fetchTasksRequest,
  showModal,
  closeModal,
  changeModalTitle,
  changeModalContent,
  taskEdit,
  removeTaskRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Taskboard);
