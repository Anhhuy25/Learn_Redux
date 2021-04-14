import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
//import { BrowserRouter } from "react-router-dom";
import reducer from "./redux/redux-thunk/reducer";
import "./components/pokemon/style.css";

// // Dung cho action creator ma tra ve plain object
// function plainObjMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       //console.log("Before dispatch", action, store.getState()); // store ban dau
//       return next(action); // next(action) = dispatch({ type: ADD_PERSON, payload: info })
//       //console.log("After dispatch", action, store.getState()); // store sau khi dispatch
//     };
//   };
// }

// // Dung cho action creator ma tra ve function, bao gom ca tra ve plain object
// const asyncMiddleware = (store) => (next) => (action) => {
//   // console.log("Next", next); // ham throw error
//   // console.log("Action", action); // action = ham dc tra ve trong fetchUsers
//   if (typeof action === "function") {
//     console.log(action(next));
//     console.log("Next", next);
//     console.log("Action", action);
//     return action(next);
//   }
//   return next(action);
// };

const store = createStore(
  reducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
export default store;

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  //</BrowserRouter>,
  document.getElementById("root"),
);
