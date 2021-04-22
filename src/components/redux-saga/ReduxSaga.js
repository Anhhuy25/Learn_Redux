import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchTasksFailed, fetchTasksRequest, fetchTasksSuccess } from "../../redux/redux-saga/fetchTasks";
import { API_ENDPOINT, url } from "../redux-saga/API/api";
// import Loading from "../redux-saga/components/Loading";
import Taskboard from "./containers/Taskboard";

// Saga
// const fetchTasks = () => {
//   return (dispatch) => {
//     dispatch(fetchTasksRequest());
//   };
// };

//----------------------------------------------------------
// THUNK function
const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    axios
      .get(`${API_ENDPOINT}${url}`)
      .then((response) => {
        dispatch(fetchTasksSuccess(response.data));
      })
      .catch((err) => dispatch(fetchTasksFailed(err.message)));
  };
};

function ReduxSaga({ isLoading, fetchTasks }) {
  React.useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <Taskboard />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLoading: state.isLoading };
};

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga);
