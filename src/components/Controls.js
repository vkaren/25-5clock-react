import React from "react";

function Controls(props) {
  return (
    <div>
      <button id="start_stop" onClick={props.onClickStartStop}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/play--v1.png"
          alt="Start Button"
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/pause--v1.png"
          alt="Stop Button"
        />
      </button>
      <button
        id="reset"
        onClick={() => {
          props.onClickReset();
          props.audio.current.pause();
          props.audio.current.currentTime = 0;
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/reboot.png"
          alt="Reset"
        />
      </button>
    </div>
  );
}

export default Controls;
