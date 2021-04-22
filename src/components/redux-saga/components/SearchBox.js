import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../../../redux/redux-saga/fetchTasks";
import TextField from "@material-ui/core/TextField";

function SearchBox({ filterTask }) {
  const handleChange = (e) => {
    filterTask(e.target.value);
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <form noValidate autoComplete='off'>
        <TextField label='Search' onChange={handleChange} />
      </form>
    </div>
  );
}

const mapDispatchToProps = { filterTask };

export default connect(null, mapDispatchToProps)(SearchBox);
