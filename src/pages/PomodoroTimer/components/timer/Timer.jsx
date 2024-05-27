import { useCallback, useEffect, useRef, useState } from "react";

import "./Timer.css";
import PomodoroButton from "./buttons/PomodoroButton";
import FiveButton from "./buttons/FiveButton";
import FifteenButton from "./buttons/FifteenButton";
import SkipButton from "./buttons/SkipButton";
import FullscreenButton from "./buttons/FullscreenButton";
import ToggleTimerButton from "./buttons/ToggleTimerButton";
import TimerDisplay from "./TimerDisplay";

export default function Timer() {
  const [timer, setTimer] = useState({
    minutes: 25,
    active: false,
    pomodoroNumber: 1,
    timeLeft: 25 * 60,
  });
  const [fullscreen, setFullscreen] = useState(false);

  const audioRef = useRef(null);

  const handleNewTimer = useCallback(() => {
    let minutes, pomodoroNumber;

    if (timer.minutes === 25) {
      minutes = timer.pomodoroNumber % 4 === 0 ? 15 : 5;
      pomodoroNumber = timer.pomodoroNumber;
    } else {
      minutes = 25;
      pomodoroNumber = timer.pomodoroNumber + 1;
    }

    setTimer({
      active: false,
      pomodoroNumber,
      minutes,
      timeLeft: minutes * 60,
    });
  }, [timer.pomodoroNumber, timer.minutes]);

  useEffect(() => {
    if (!timer.active) return;

    if (timer.timeLeft <= 0) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
      handleNewTimer();
    } else {
      const timeout = setTimeout(setTimer, 1000, {
        ...timer,
        timeLeft: timer.timeLeft - 1,
      });
      return () => clearTimeout(timeout);
    }
  }, [timer, handleNewTimer]);

  function changeMinutes(minutes) {
    setTimer({ ...timer, active: false, minutes, timeLeft: minutes * 60 });
  }

  return (
    <section
      className={`flex flex-col gap-4 xs:items-center ${
        fullscreen ? "fullscreen" : "relative"
      }`}
      aria-label="timer"
    >
      <audio ref={audioRef}>
        <source
          src="./timer-end.mp3"
          type="audio/mp3"
          aria-hidden={true}
          className="sr-only"
        />
      </audio>
      <TimerDisplay timeLeft={timer.timeLeft} fullscreen={fullscreen} />
      <ul
        className={`w-full grid grid-cols-6 gap-3 lg:gap-2 xs:grid-cols-3 xs:grid-rows-2 xs:w-fit`}
        id="timer-buttons"
        aria-label="timer buttons"
      >
        <li>
          <PomodoroButton
            onClick={() => changeMinutes(25)}
            pressed={timer.minutes === 25}
          />
        </li>
        <li>
          <FiveButton
            onClick={() => changeMinutes(5)}
            pressed={timer.minutes === 5}
          />
        </li>
        <li>
          <FifteenButton
            onClick={() => changeMinutes(15)}
            pressed={timer.minutes === 15}
          />
        </li>
        <li>
          <ToggleTimerButton
            onClick={() => setTimer({ ...timer, active: !timer.active })}
            pressed={timer.active}
          />
        </li>
        <li>
          <SkipButton onClick={handleNewTimer} />
        </li>
        <li>
          <FullscreenButton
            onClick={() => setFullscreen(!fullscreen)}
            pressed={fullscreen}
          />
        </li>
      </ul>
      <p>Pomodoro #{timer.pomodoroNumber}!</p>
    </section>
  );
}
