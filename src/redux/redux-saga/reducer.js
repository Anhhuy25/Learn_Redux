import {
  FETCH_TASKS_FAILED,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  SHOW_LOADING,
  HIDE_LOADING,
  FILTER_TASK_SUCCESS,
  SHOW_MODAL,
  CLOSE_MODAL,
  CHANGE_MODAL_TITLE,
  CHANGE_MODAL_CONTENT,
  ADD_TASK_REQUEST,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED,
  TASK_EDITING,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_REQUEST,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILED,
} from "./actions";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialStore = {
  isLoading: true,
  listTasks: [],
  error: "",
  isEdit: null,
  removeId: null,
};

const reducerListTask = (state = initialStore, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TASKS_SUCCESS:
      return { ...state, isLoading: false, listTasks: action.payload };
    case FETCH_TASKS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case FILTER_TASK_SUCCESS:
      return { ...state, listTasks: action.payload };
    case ADD_TASK_REQUEST:
      return { ...state };
    case ADD_TASKS_SUCCESS:
      return { ...state, listTasks: [action.payload].concat(state.listTasks) };
    case ADD_TASKS_FAILED:
      return { ...state, error: action.payload };
    case TASK_EDITING:
      return { ...state, isEdit: action.payload };
    case UPDATE_TASK_REQUEST:
      return { ...state };
    case UPDATE_TASK_SUCCESS:
      const index = state.listTasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        const newList = [...state.listTasks.slice(0, index), action.payload, ...state.listTasks.slice(index + 1)];
        return { ...state, listTasks: newList };
      }
      return { ...state };
    case UPDATE_TASK_FAILED:
      return { ...state, error: action.payload };
    case REMOVE_TASK_REQUEST:
      return { ...state };
    case REMOVE_TASK_SUCCESS:
      const newList = state.listTasks.filter((task) => task.id !== action.payload);
      return { ...state, listTasks: newList };
    case REMOVE_TASK_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const initialLoading = {
  isLoading: false,
};

const reducerLoading = (state = initialLoading, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const intialModal = {
  isShow: false,
  title: "",
  component: null,
};

const reducerModal = (state = intialModal, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isShow: true };
    case CLOSE_MODAL:
      return { ...state, isShow: false, title: "", component: null };
    case CHANGE_MODAL_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_MODAL_CONTENT:
      return { ...state, component: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: reducerListTask,
  loading: reducerLoading,
  modal: reducerModal,
  form: formReducer,
});

export default rootReducer;
