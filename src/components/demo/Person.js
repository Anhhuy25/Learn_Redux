import React from "react";
import { connect } from "react-redux";
import { REMOVE } from "../../redux/demo/actions";

//const remove = (id) => ({ type: REMOVE, payload: id });

function Person({ id, name, year, remove }) {
  return (
    <div>
      <p>
        <span>{name} - </span>
        <span>{year}</span>
      </p>
      <button
        onClick={remove}
        //onClick={() => remove(id)}
      >
        remove
      </button>
    </div>
  );
}

// mapDispatchToProps as an Function
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return { remove: () => dispatch({ type: REMOVE, payload: id }) };
};

// mapDispatchToProps as an Object
// const mapDispatchToProps = {
//   remove,
// };

export default connect(null, mapDispatchToProps)(Person);
