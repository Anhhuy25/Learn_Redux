import { CHANGE_VALUE, ADD_PEOPLE, CHECK_STATUS, FIX, REMOVE, EDIT, CHECK_ISCOMPLETE } from "./actions";

const initialStore = {
  people: [],
  value: "",
  isEditing: false,
  editID: null,
  status: "all",
  filterStatus: [],
};

const reducer = (state = initialStore, action) => {
  if (action.type === CHANGE_VALUE) {
    return { ...state, value: action.payload };
  }
  if (action.type === ADD_PEOPLE) {
    const newPeople = {
      id: new Date().getTime().toString(),
      name: state.value,
      isComplete: false,
    };
    return {
      ...state,
      people: [...state.people, newPeople],
      filterStatus: [...state.filterStatus, newPeople],
      value: "",
    };
  }
  if (action.type === REMOVE) {
    return { ...state, people: state.people.filter((person) => person.id !== action.payload) };
  }
  if (action.type === FIX) {
    const specificItem = state.people.find((person) => person.id === action.payload);
    return { ...state, value: specificItem.name, isEditing: true, editID: action.payload };
  }
  if (action.type === EDIT) {
    return { ...state, people: action.payload, value: "", isEditing: false, editID: null };
  }
  if (action.type === CHECK_STATUS) {
    switch (action.payload) {
      case "completed":
        return {
          ...state,
          filterStatus: state.people.filter((person) => person.isComplete === true),
          status: action.payload,
        };
      case "incomplete":
        return {
          ...state,
          filterStatus: state.people.filter((person) => person.isComplete === false),
          status: action.payload,
        };
      default:
        return { ...state, filterStatus: state.people, status: action.payload };
    }
  }
  if (action.type === CHECK_ISCOMPLETE) {
    const specificItem = state.people.map((person) => {
      if (person.id === action.payload.id) {
        return { ...person, isComplete: !person.isComplete };
      }
      return person;
    });
    const specificItem2 = state.filterStatus
      .map((person) => {
        if (person.id === action.payload.id) {
          return { ...person, isComplete: !person.isComplete };
        }
        return person;
      })
      .filter((person) => {
        switch (action.payload.sta) {
          case "completed":
            return person.isComplete === true;
          case "incomplete":
            return person.isComplete === false;
          default:
            return person;
        }
      });

    return { ...state, people: specificItem, filterStatus: specificItem2 };
  }
  return state;
};

export default reducer;
