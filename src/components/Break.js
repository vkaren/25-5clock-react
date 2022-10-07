import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

function Break(props) {
  return (
    <div id="break-label">
      <h2>Break Length</h2>
      <div>
        <Decrement
          id="break-decrement"
          onClickDecrement={props.onClickDecrement}
        />
        <Increment
          id="break-increment"
          onClickIncrement={props.onClickIncrement}
        />
      </div>
      <p id="break-length">{props.breakLength} </p>
    </div>
  );
}

export default Break;
