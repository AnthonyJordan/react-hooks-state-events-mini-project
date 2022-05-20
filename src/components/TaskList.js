import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const taskArray = tasks.map(task => <Task key={task.text} category={task.category} text={task.text} ></Task>)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
    </div>
  );
}

export default TaskList;
