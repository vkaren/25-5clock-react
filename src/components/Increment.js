import React from "react";

function Increment(props) {
  return (
    <button id={props.id} className="inc" onClick={props.onClickIncrement}>
      <i className="bi bi-caret-up-fill"></i>
    </button>
  );
}

export default Increment;
