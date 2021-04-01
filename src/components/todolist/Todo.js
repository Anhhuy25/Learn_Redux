import React from "react";
import { connect } from "react-redux";
import { CHECK_ISCOMPLETE, FIX, REMOVE } from "../../redux/todolist/actions";

function Todo({ name, remove, fix, check, status, isComplete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2 style={{ margin: "4px 12px", textDecoration: `${isComplete ? "line-through" : ""}` }}>{name}</h2>
      <button onClick={() => check(status)}>{`${isComplete ? "Un-check" : "Check"}`}</button>
      <button onClick={fix}>Fix</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { status: state.status };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    check: (sta) => dispatch({ type: CHECK_ISCOMPLETE, payload: { id, sta } }),
    fix: () => dispatch({ type: FIX, payload: id }),
    remove: () => dispatch({ type: REMOVE, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
