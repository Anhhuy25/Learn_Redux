import React from "react";
import Grid from "@material-ui/core/Grid";
import TaskItems from "./TaskItems";

function TaskList({ filterTask, status, taskEditing, showModalRemoveTask }) {
  return (
    <Grid item xs={12} md={4}>
      {status}
      {filterTask.map((task) => {
        return (
          <TaskItems showModalRemoveTask={showModalRemoveTask} taskEditing={taskEditing} key={task.id} {...task} />
        );
      })}
    </Grid>
  );
}

export default TaskList;
