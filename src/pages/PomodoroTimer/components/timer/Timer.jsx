import { useContext, useEffect, useRef, useState } from "react";

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
  const dialogRef = useRef(null);
  const fullscreenButtonRef = useRef(null);

  useEffect(() => {
    if (fullscreen) {
      dialogRef.current.showModal();
      fullscreenButtonRef.current.focus();
    } else {
      dialogRef.current.close();
    }
  }, [fullscreen]);

  function handleEscape(e) {
    if (e.key === "Escape") setFullscreen(false);
  }

  return (
    <dialog
      className={`flex flex-col gap-4 xs:items-center justify-center min-w-full w-full text-LM-neutral dark:text-DM-neutral bg-LM-primary dark:bg-DM-primary px-1 ${
        fullscreen ? "fullscreen" : "relative m-0"
      }`}
      ref={dialogRef}
      aria-modal={fullscreen}
      id="pomodoro-timer"
      onKeyDown={handleEscape}
      aria-label="Pomodoro Timer"
    >
      <div
        className={`w-full flex items-center justify-center border border-LM-accent-light dark:border-DM-accent-light rounded-2xl ${
          fullscreen
            ? "h-40 xs:h-32 text-9xl xs:text-8xl"
            : "shadow-lg h-64 xs:h-40 text-8xl xs:text-7xl"
        }`}
        role="timer"
      >
        {getDisplay()}
      </div>
      <ul
        className={`w-full grid grid-rows-1 grid-cols-6 gap-3 lg:gap-2 xs:grid-cols-3 xs:grid-rows-2 xs:w-fit`}
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
            ref={fullscreenButtonRef}
          />
        </li>
      </ul>
      <p>Pomodoro #{timer.pomodoroNumber}!</p>
    </dialog>
  );
}
