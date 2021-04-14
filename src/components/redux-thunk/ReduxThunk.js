import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FETCH_LOADING, FETCH_USERS_SUCCESS, ADD_PERSON, REMOVE_PERSON } from "../../redux/redux-thunk/actions";
import Users from "./Users";

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
const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchLoading());
    const res = await axios.get(url);

    if (res) {
      dispatch(fetchUsersSuccess(res.data));
    }
  };
};

function ReduxThunk({ people, addPerson, removePerson, fetchUsers }) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
  return { people: state.people };
};

const mapDispatchToProps = {
  addPerson,
  removePerson,
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);
