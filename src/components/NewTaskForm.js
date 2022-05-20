import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formInput, setFormInput] = useState("")
  const [formCategorySelection, setFormCategorySelection] = useState("Code")
  const newItem = {
    text: formInput,
    category: formCategorySelection
  }
  function handleFormChange(event) {
    setFormInput(event.target.value)
  }

  function handleFormCategoryChange(event) {
    setFormCategorySelection(event.target.value)
  }
  const categoryElements = categories.map((category) => {
    if (category !== "All") {
      return <option key={category} value={category}>{category}</option>
    } else {
      return null
    }
  })
  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault()
      onTaskFormSubmit(newItem)
      setFormInput("")
    }}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} value={formInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoryElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
