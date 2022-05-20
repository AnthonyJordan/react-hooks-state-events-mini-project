import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [buttonState, setButtonState] = useState("All")
  const [taskArray, setTaskArray] = useState(TASKS)
  const tasksToDisplay = taskArray.filter(task => buttonState === "All" ? true : task.category === buttonState)

  function clickHelper(category) {

    setButtonState(category)
  }
  function handleFormSubmit(newItem) {
    setTaskArray([...taskArray, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} clickHelper={clickHelper} buttonState={buttonState} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={tasksToDisplay} />
    </div>
  );
}

export default App;
