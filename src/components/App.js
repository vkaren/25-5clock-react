import React from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

class App extends React.Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timeSession: "25:00",
    timeBreak: "05:00",
    currentTime: "25:00",
    timerType: "Session",
    pause: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sessionLength !== prevState.sessionLength) {
      const sessionLength = this.state.sessionLength;
      const timeSession =
        sessionLength > 9 ? sessionLength + ":00" : "0" + sessionLength + ":00";

      this.setState({ timeSession, currentTime: timeSession });
    }
    if (this.state.breakLength !== prevState.breakLength) {
      const breakLength = this.state.breakLength;
      const timeBreak =
        breakLength > 9 ? breakLength + ":00" : "0" + breakLength + ":00";
      this.setState({ timeBreak });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClickDecrement = (event) => {
    const id = event.currentTarget.id;

    if (id === "break-decrement") {
      let breakLength = this.state.breakLength;
      if (breakLength >= 2 && breakLength <= 60) {
        breakLength--;
        this.setState({ breakLength });
      }
    } else {
      let sessionLength = this.state.sessionLength;
      if (sessionLength >= 2 && sessionLength <= 60) {
        sessionLength--;
        this.setState({ sessionLength });
      }
    }
  };

  onClickIncrement = (event) => {
    const id = event.currentTarget.id;

    if (id === "break-increment") {
      let breakLength = this.state.breakLength;
      if (breakLength >= 1 && breakLength <= 59) {
        breakLength++;
        this.setState({ breakLength });
      }
    } else {
      let sessionLength = this.state.sessionLength;
      if (sessionLength >= 1 && sessionLength <= 59) {
        sessionLength++;
        this.setState({ sessionLength });
      }
    }
  };

  onClickStartStop = (event) => {
    let pause = this.state.pause;
    if (event) {
      pause = !this.state.pause;
      this.setState({ pause });
    }

    if (!pause) {
      let timeSession = this.state.timeSession;
      let timeBreak = this.state.timeBreak;
      let currentTime = this.state.currentTime;

      if (timeSession !== "00:00") {
        currentTime = timeSession;
      } else if (timeSession === "00:00" && timeBreak !== "00:00") {
        if (currentTime === "00:01") {
          currentTime = "00:00";
        } else {
          currentTime = timeBreak;
          this.setState({ timerType: "Break" });
        }
      } else if (timeSession === "00:00" && timeBreak === "00:00") {
        const sessionLength = this.state.sessionLength;
        const breakLength = this.state.breakLength;

        if (currentTime === "00:01") {
          currentTime = "00:00";
        } else {
          timeSession =
            sessionLength > 9
              ? sessionLength + ":00"
              : "0" + sessionLength + ":00";

          timeBreak =
            breakLength > 9 ? breakLength + ":00" : "0" + breakLength + ":00";

          currentTime = timeSession;

          this.setState({
            timeSession,
            timeBreak,
            timerType: "Session",
          });
        }
      }

      this.setState({ currentTime });
      this.time(currentTime.split(":"));

      this.timer = setTimeout(this.onClickStartStop, 1000);
    } else {
      clearInterval(this.timer);
    }
  };

  time = (time) => {
    let timeSession = this.state.timeSession;
    let timeBreak = this.state.timeBreak;

    if (time[1] > 0) {
      time[1] = time[1] - 1 < 10 ? "0" + (time[1] - 1) : time[1] - 1;
    } else if (time[0] > 0) {
      time[0] = time[0] - 1 < 10 ? "0" + (time[0] - 1) : time[0] - 1;
      time[1] = 59;
    } else {
      return;
    }

    if (timeSession !== "00:00") {
      timeSession = time.join(":");
      this.setState({ timeSession });
    } else if (timeSession === "00:00" && timeBreak !== "00:00") {
      timeBreak = time.join(":");
      this.setState({ timeBreak });
    }
  };

  onClickReset = () => {
    this.setState({
      timeSession: "25:00",
      timeBreak: "05:00",
      breakLength: 5,
      sessionLength: 25,
      currentTime: "25:00",
      timerType: "Session",
      pause: true,
    });
  };

  render() {
    return (
      <div className="clock">
        <Break
          breakLength={this.state.breakLength}
          onClickDecrement={this.onClickDecrement}
          onClickIncrement={this.onClickIncrement}
        />
        <Session
          sessionLength={this.state.sessionLength}
          onClickDecrement={this.onClickDecrement}
          onClickIncrement={this.onClickIncrement}
        />
        <Timer
          onClickStartStop={this.onClickStartStop}
          onClickReset={this.onClickReset}
          currentTime={this.state.currentTime}
          timerType={this.state.timerType}
          pause={this.state.pause}
        />
      </div>
    );
  }
}

export default App;
