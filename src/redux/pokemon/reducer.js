import { LOADING, FETCH_PKM, FETCH_INFO } from "./actions";

const initialStore = {
  isLoading: true,
  listPKM: [],
  listInfo: [],
};

const reducer = (state = initialStore, action) => {
  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === FETCH_PKM) {
    return { ...state, listPKM: action.payload, isLoading: false };
  }
  if (action.type === FETCH_INFO) {
    return { ...state, listInfo: [...state.listInfo, action.payload] };
  }
  return state;
};

export default reducer;
