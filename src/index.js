import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
//import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux/redux-saga/reducer";
import rootSaga from "./redux/redux-saga/sagas";

// Saga
const composeEnhancers =
  // process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //       shouldHotReload: false,
  //     })
  //   : compose;
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

//------------------------------
// Thunk
// const asyncMiddleware = (store) => (next) => (action) => {
//   // console.log("Next", next); // ham throw error
//   // console.log("Action", action); // action = ham dc tra ve trong fetchUsers
//   if (typeof action === "function") {
//     // console.log(store);
//     // console.log("Next: ", next);
//     // console.log("Action: ", action);
//     return action(next);
//     //console.log(action(next));
//   }
//   return next(action);
// };

// const store = createStore(reducer, applyMiddleware(asyncMiddleware));

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  //</BrowserRouter>,
  document.getElementById("root"),
);
