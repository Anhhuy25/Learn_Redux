// import { DECREASE, INCREASE, CHANGE_NAME, RESET, REMOVE } from "./actions";
// import { people } from "../../List";

// // initial store
// const initialStore = {
//   num: 0,
//   name: "Gipsy Danger",
//   people,
// };

// const reducer = (state = initialStore, action) => {
//   if (action.type === DECREASE) {
//     if (state.num <= 0) {
//       console.log("zero");
//       return { ...state, num: 0 };
//     } else {
//       return { ...state, num: state.num - 1 };
//     }
//   }
//   if (action.type === INCREASE) {
//     return { ...state, num: state.num + 1 };
//   }
//   if (action.type === RESET) {
//     return { ...state, num: 0 };
//   }
//   if (action.type === CHANGE_NAME) {
//     if (state.name === "Gipsy Danger") {
//       return { ...state, name: "Gipsy Avenger" };
//     } else {
//       return { ...state, name: "Gipsy Danger" };
//     }
//   }
//   if (action.type === REMOVE) {
//     console.log(action.payload);
//     const newPeople = state.people.filter((person) => person.id !== action.payload);
//     return { ...state, people: newPeople };
//   }
//   return state;
// };

// export default reducer;
