import React from "react";

const EnlistButton = ({ onClick }) => {
  return (
    <button className="enlist-button" onClick={onClick}>
      Enlist
    </button>
  );
};

export default EnlistButton;
