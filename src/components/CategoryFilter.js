import React from "react";

function CategoryFilter({ categories, clickHelper, buttonState }) {
  const buttonArray = categories.map(category => <button key={category}
    onClick={() => clickHelper(category)}
    className={buttonState === category ? "selected" : ""}
  >{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonArray}
    </div>
  );
}

export default CategoryFilter;
