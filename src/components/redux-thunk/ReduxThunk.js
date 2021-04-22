import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FETCH_LOADING, FETCH_USERS_SUCCESS, ADD_PERSON, REMOVE_PERSON } from "../../redux/redux-thunk/actions";
import Users from "./Users";
import Loading from "./Loading";
import "./style.css";

const url = "https://jsonplaceholder.typicode.com/users";

// Action creators
const addPerson = (name) => {
  const info = {
    id: new Date().getTime().toString(),
    name,
  };

  return { type: ADD_PERSON, payload: info };
};

const removePerson = (id) => {
  return { type: REMOVE_PERSON, payload: id };
};

const fetchLoading = () => {
  return { type: FETCH_LOADING };
};

const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_SUCCESS, payload: users };
};

// Thunk function
// redux-thunk is a Redux Middleware that lets your action creators return a function called a thunk,
// instead of an action. This thunk can return an action when invoked but it also has access to the Redux store's dispatch function,
// meaning it can also dispatch other actions
const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchLoading());
    const res = await axios.get(url);

    if (res) {
      dispatch(fetchUsersSuccess(res.data));
    }
  };
};

function ReduxThunk({ people, addPerson, removePerson, fetchUsers, isLoading }) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    fetchUsers();
    // console.log(typeof fetchUsers());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Users />
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          addPerson(name);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <span>{person.name}</span>
              <button onClick={() => removePerson(person.id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { people: state.people, isLoading: state.isLoading };
};

const mapDispatchToProps = {
  addPerson,
  removePerson,
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);

//-------- Function mo ta middleware -----------------------
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

// // Dung cho action creator ma tra ve function (duoc goi la thunk), bao gom ca tra ve plain object
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
