import { fork, take, call, put, delay, takeLatest, select } from "redux-saga/effects";
import {
  ADD_TASK_REQUEST,
  FETCH_TASKS_REQUEST,
  FILTER_TASK,
  REMOVE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
} from "./actions";
import { updateTask, getListTask, postTask, removeTask } from "../../components/redux-saga/API/api";
import {
  fetchTasksSuccess,
  fetchTasksFailed,
  showLoading,
  hideLoading,
  // filterTaskSuccess,
  addTasksFailed,
  addTasksSuccess,
  closeModal,
  fetchTasksRequest,
  updateTaskSuccess,
  updateTaskFailed,
  removeTaskFailed,
  removeTaskSuccess,
} from "./fetchTasks";

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(FETCH_TASKS_REQUEST);
    const { payload } = action;
    yield put(showLoading());
    yield delay(1000);
    const response = yield call(getListTask, payload);
    const { data } = response;
    try {
      yield put(fetchTasksSuccess(data));
    } catch (error) {
      yield put(fetchTasksFailed(error));
    }
    yield put(hideLoading());
  }
}

function* watchFilterTask(value) {
  yield delay(1000);
  const { payload } = value;
  yield put(fetchTasksRequest({ q: payload }));
  // const list = yield select((state) => state.tasks.listTasks);
  // const filterTask = list.filter((task) => task.title.toLowerCase().includes(payload.trim().toLowerCase()));
  // yield put(filterTaskSuccess(filterTask));
}

function* watchAddTask({ payload }) {
  yield put(showLoading());
  const { title, description } = payload;
  const response = yield call(postTask, { title, description, status: "NEW" });
  try {
    yield put(addTasksSuccess(response.data));
    // yield put(closeModal());
  } catch (error) {
    yield put(addTasksFailed(error));
  }
  yield put(hideLoading());
}

function* watchUpdateTask({ payload }) {
  const { title, description } = payload;
  const list = yield select((state) => state.tasks.isEdit);
  const response = yield call(updateTask, { title, description, status: "NEW" }, list.id);
  try {
    yield put(updateTaskSuccess(response.data));
    yield put(closeModal());
  } catch (error) {
    yield put(updateTaskFailed(error));
  }
}

function* watchRemoveTask(value) {
  const { payload } = value;
  yield put(showLoading());
  yield call(removeTask, payload);
  try {
    yield put(removeTaskSuccess(payload));
    yield put(closeModal());
  } catch (error) {
    yield put(removeTaskFailed(error));
  }
  yield put(hideLoading());
}

function* rootSaga() {
  // yield fork(["forkkkkkk", watchFetchListTaskAction], 5);
  yield fork(watchFetchListTaskAction);
  yield takeLatest(FILTER_TASK, watchFilterTask);
  yield takeLatest(ADD_TASK_REQUEST, watchAddTask);
  yield takeLatest(UPDATE_TASK_REQUEST, watchUpdateTask);
  yield takeLatest(REMOVE_TASK_REQUEST, watchRemoveTask);
}

// const result = rootSaga();
// console.log(result.next().value);

export default rootSaga;
