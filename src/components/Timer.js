import React from "react";
import Controls from "./Controls";

class Timer extends React.Component {
  audio = React.createRef();

  render() {
    if (this.props.currentTime === "00:00") {
      this.audio.current.play();
    }

    const currentTime = this.props.currentTime.split(":");
    const runningOut = currentTime[0] == 0 && currentTime[1] <= 10;
    const runningOutStyle = { color: "rgb(168, 25, 0)" };

    return (
      <div id="timer-label">
        <h1>{this.props.timerType}</h1>
        <p id="time-left" style={runningOut ? runningOutStyle : null}>
          {this.props.currentTime}
        </p>
        <Controls
          audio={this.audio}
          onClickStartStop={this.props.onClickStartStop}
          onClickReset={this.props.onClickReset}
        />
        {
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <audio
            ref={this.audio}
            src="https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/SYNTH%20AND%20ELECTRONIC%20LOOPS/343[kb]122-soft-alarm-beat.wav.mp3"
            id="beep"
          ></audio>
        }
      </div>
    );
  }
}

export default Timer;
