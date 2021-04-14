import { FETCH_LOADING, FETCH_USERS_SUCCESS, ADD_PERSON, REMOVE_PERSON } from "./actions";

const initialStore = {
  isLoading: true,
  users: [],
  people: [],
};

const reducer = (state = initialStore, action) => {
  if (action.type === FETCH_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === FETCH_USERS_SUCCESS) {
    return { ...state, isLoading: false, users: action.payload };
  }
  if (action.type === ADD_PERSON) {
    return { ...state, people: [...state.people, action.payload] };
  }
  if (action.type === REMOVE_PERSON) {
    const removePerson = state.people.filter((person) => person.id !== action.payload);
    return { ...state, people: removePerson };
  }
  return state;
};

export default reducer;
