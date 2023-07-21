import React, { useEffect, useState } from "react";
import "./counter.css";
const Counter = () => {
  const [time, setTime] = useState(0);
  const [isRuinng, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRuinng) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRuinng, time]);

  const StartndStop = () => {
    setIsRunning((prev) => !prev);
  };
  const onReset = () => {
    setTime(0);
  };

  const hour = Math.floor(time / 360000);
  const min = Math.floor((time % 36000) / 6000);
  const second = Math.floor((time % 6000) / 100);
  const mSecond = time % 100;

  return (
    <div className="counter-container">
      <div className="button-groups">
        <h1>
          {hour}:{min.toString().padStart(2, "0")}:
          {second.toString().padStart(2, "0")}:
          {mSecond.toString().padStart(2, "0")}
        </h1>
        <button onClick={(e) => StartndStop(e)}>
          {isRuinng ? "Stop" : "Start"}
        </button>
        <button onClick={(e) => onReset(e)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
