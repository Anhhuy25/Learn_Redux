import React from "react";
import { connect } from "react-redux";
import { CHANGE_VALUE, ADD_PEOPLE, EDIT, CHECK_STATUS } from "../../redux/todolist/actions";
import FilterStatus from "./FilterStatus";
import Todo from "./Todo";

function Form({ value, people, isEditing, editID, filterStatus, dispatch }) {
  const handleClick = () => {
    if (value && isEditing) {
      const newPeople = people.map((person) => {
        if (person.id === editID) {
          return { ...person, name: value };
        }
        return person;
      });
      dispatch({ type: EDIT, payload: newPeople });
    } else {
      dispatch({ type: ADD_PEOPLE });
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' value={value} onChange={(e) => dispatch({ type: CHANGE_VALUE, payload: e.target.value })} />
      <button onClick={handleClick}>{isEditing ? "Edit" : "Submit"}</button>
      <select onChange={(e) => dispatch({ type: CHECK_STATUS, payload: e.target.value })}>
        <option value='all'>all</option>
        <option value='completed'>completed</option>
        <option value='incomplete'>incomplete</option>
      </select>
      {people.map((person) => {
        return <Todo key={person.id} {...person} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    people: state.people,
    isEditing: state.isEditing,
    editID: state.editID,
    filterStatus: state.filterStatus,
    status: state.status,
  };
};

export default connect(mapStateToProps)(Form);
