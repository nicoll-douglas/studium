import { useContext, useState } from "react";

import "./Timer.css";
import SetterButton from "./buttons/SetterButton";
import SkipButton from "./buttons/SkipButton";
import FullscreenButton from "./buttons/FullscreenButton";
import ToggleTimerButton from "./buttons/ToggleTimerButton";
import actions from "../../../../hooks/useTimer/actions";
import { TimerContext } from "../../../../layouts/AppLayout";

export default function Timer() {
  const [timer, dispatch, getDisplay] = useContext(TimerContext);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section
      className={`flex flex-col gap-4 xs:items-center ${
        fullscreen ? "fullscreen" : "relative"
      }`}
      aria-label="timer"
    >
      <div
        className={`w-full flex items-center justify-center border border-LM-accent-light dark:border-DM-accent-light rounded-2xl h-64 text-8xl xs:h-40 xs:text-7xl ${
          fullscreen ? "" : "shadow-lg"
        }`}
      >
        <div>{getDisplay()}</div>
      </div>
      <ul
        className={`w-full grid grid-cols-6 gap-3 lg:gap-2 xs:grid-cols-3 xs:grid-rows-2 xs:w-fit`}
        id="timer-buttons"
        aria-label="timer buttons"
      >
        <li>
          <SetterButton
            dispatch={dispatch}
            minutes={25}
            pressed={timer.minutes === 25}
          />
        </li>
        <li>
          <SetterButton
            dispatch={dispatch}
            minutes={5}
            pressed={timer.minutes === 5}
          />
        </li>
        <li>
          <SetterButton
            dispatch={dispatch}
            minutes={15}
            pressed={timer.minutes === 15}
          />
        </li>
        <li>
          <ToggleTimerButton
            onClick={() => dispatch({ type: actions.toggle })}
            pressed={timer.active}
          />
        </li>
        <li>
          <SkipButton onClick={() => dispatch({ type: actions.skip })} />
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
