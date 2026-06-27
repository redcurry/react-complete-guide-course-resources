import { useState, useRef } from "react";
import ResultModal from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const timerStart = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  function onStartTimer() {
    setTimerStarted(true);
    timerStart.current = Date.now();
    timer.current = setTimeout(() => {
      setTimeRemaining(0);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function onStopTimer() {
    clearTimeout(timer.current);
    setTimeRemaining(targetTime * 1000 - (Date.now() - timerStart.current));
    dialog.current.open();
  }

  function onReset() {
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={onReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? onStopTimer : onStartTimer}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
