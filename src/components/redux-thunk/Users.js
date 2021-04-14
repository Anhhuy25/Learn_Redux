import React from "react";
import { connect } from "react-redux";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
