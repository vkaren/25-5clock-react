import React from "react";

function Increment(props) {
  return (
    <button id={props.id} className="inc" onClick={props.onClickIncrement}>
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png"
        alt="Increment Button"
      />
    </button>
  );
}

export default Increment;
