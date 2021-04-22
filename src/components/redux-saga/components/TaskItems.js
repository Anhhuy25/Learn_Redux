import React from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function TaskItems({ id, title, description, taskEditing, showModalRemoveTask }) {
  return (
    <Card style={{ margin: "12px 0" }}>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button onClick={() => taskEditing({ id, title, description })}>
          <EditIcon color='primary' fontSize='large' />
        </Button>
        <Button onClick={() => showModalRemoveTask(id, title)}>
          <DeleteIcon color='secondary' fontSize='large' />
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskItems;
