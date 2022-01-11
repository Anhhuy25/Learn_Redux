import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./redux/pokemon/reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//------------------------------
// Thunk
const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(next);
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(asyncMiddleware));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
