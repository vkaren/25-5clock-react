import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

function Session(props) {
  return (
    <div id="session-label">
      <h2>Session Length</h2>
      <div>
        <Decrement
          id="session-decrement"
          onClickDecrement={props.onClickDecrement}
        />
        <Increment
          id="session-increment"
          onClickIncrement={props.onClickIncrement}
        />
      </div>
      <p id="session-length">{props.sessionLength}</p>
    </div>
  );
}

export default Session;
