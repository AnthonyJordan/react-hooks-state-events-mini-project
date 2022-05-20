import React from "react";

function Task({ category, text }) {

  function deleteTask(event) {
    event.target.parentElement.remove()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
