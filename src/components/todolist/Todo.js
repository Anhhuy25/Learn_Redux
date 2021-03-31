import React from "react";
import { connect } from "react-redux";
import { CHECK_ISCOMPLETE, FIX, REMOVE } from "../../redux/todolist/actions";

function Todo({ name, remove, fix, check, isComplete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2 style={{ margin: "4px 12px", textDecoration: `${isComplete ? "line-through" : ""}` }}>{name}</h2>
      <button onClick={check}>{`${isComplete ? "Un-check" : "Check"}`}</button>
      <button onClick={fix}>Fix</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    check: () => dispatch({ type: CHECK_ISCOMPLETE, payload: id }),
    fix: () => dispatch({ type: FIX, payload: id }),
    remove: () => dispatch({ type: REMOVE, payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
