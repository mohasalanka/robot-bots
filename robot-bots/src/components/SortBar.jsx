import React from "react";

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    if (onSortChange) {
    onSortChange(event.target.value);
    }
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={handleSortChange}>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="power-asc">Power (low to high)</option>
        <option value="power-desc">Power (high to low)</option>
      </select>
    </div>
  );
};

export default SortBar;
