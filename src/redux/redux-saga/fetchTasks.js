import {
  FETCH_TASKS_FAILED,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  SHOW_LOADING,
  HIDE_LOADING,
  FILTER_TASK,
  FILTER_TASK_SUCCESS,
  SHOW_MODAL,
  CLOSE_MODAL,
  CHANGE_MODAL_TITLE,
  CHANGE_MODAL_CONTENT,
  ADD_TASK_REQUEST,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED,
  TASK_EDITING,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILED,
} from "./actions";

export const fetchTasksRequest = (objParam) => {
  return { type: FETCH_TASKS_REQUEST, payload: objParam };
};

export const fetchTasksSuccess = (tasks) => {
  return { type: FETCH_TASKS_SUCCESS, payload: tasks };
};

export const fetchTasksFailed = (error) => {
  return { type: FETCH_TASKS_FAILED, payload: error };
};

export const showLoading = () => {
  return { type: SHOW_LOADING };
};

export const hideLoading = () => {
  return { type: HIDE_LOADING };
};

export const filterTask = (word) => {
  return { type: FILTER_TASK, payload: word };
};

export const filterTaskSuccess = (task) => {
  return { type: FILTER_TASK_SUCCESS, payload: task };
};

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

export const changeModalTitle = (title) => {
  return { type: CHANGE_MODAL_TITLE, payload: title };
};

export const changeModalContent = (component) => {
  return { type: CHANGE_MODAL_CONTENT, payload: component };
};

export const addTaskRequest = (title, description) => {
  return { type: ADD_TASK_REQUEST, payload: { title, description } };
};

export const addTasksSuccess = (data) => {
  return { type: ADD_TASKS_SUCCESS, payload: data };
};

export const addTasksFailed = (error) => {
  return { type: ADD_TASKS_FAILED, payload: error };
};

export const taskEdit = (task) => {
  return { type: TASK_EDITING, payload: task };
};

export const updateTaskRequest = (title, description) => {
  return { type: UPDATE_TASK_REQUEST, payload: { title, description } };
};

export const updateTaskSuccess = (data) => {
  return { type: UPDATE_TASK_SUCCESS, payload: data };
};

export const updateTaskFailed = (error) => {
  return { type: UPDATE_TASK_FAILED, payload: error };
};

export const removeTaskRequest = (task) => {
  return { type: REMOVE_TASK_REQUEST, payload: task };
};

export const removeTaskSuccess = (data) => {
  return { type: REMOVE_TASK_SUCCESS, payload: data };
};

export const removeTaskFailed = (error) => {
  return { type: REMOVE_TASK_FAILED, payload: error };
};
