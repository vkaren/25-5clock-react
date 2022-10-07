import React from "react";

function Decrement(props) {
  return (
    <button id={props.id} className="dec" onClick={props.onClickDecrement}>
      <i className="bi bi-caret-down-fill"></i>
    </button>
  );
}

export default Decrement;
