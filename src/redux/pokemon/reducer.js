import { FETCH_INFO } from "./actions";

const initialStore = {
  listInfo: [],
};

const reducer = (state = initialStore, action) => {
  if (action.type === FETCH_INFO) {
    return { ...state, listInfo: action.payload };
  }
  return state;
};

export default reducer;
