import React from "react";

function Decrement(props) {
  return (
    <button id={props.id} className="dec" onClick={props.onClickDecrement}>
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png"
        alt="Decrement Button"
      />
    </button>
  );
}

export default Decrement;
