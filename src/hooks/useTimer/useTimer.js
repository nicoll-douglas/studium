import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import actions from "./actions";

export default function useTimer() {
  const [timer, dispatch] = useReducer(reducer, {
    minutes: 25,
    active: false,
    pomodoroNumber: 1,
    timeLeft: 25 * 60,
  });

  useEffect(() => {
    if (!timer.active) return;

    if (timer.timeLeft <= 0) {
      dispatch({
        type: actions.skip,
      });
    } else {
      const timeout = setTimeout(dispatch, 1000, { type: actions.progress });
      return () => clearTimeout(timeout);
    }
  }, [timer.timeLeft, timer.active]);

  function getDisplay() {
    const minutesLeft = Math.floor(timer.timeLeft / 60);
    const secondsLeft = timer.timeLeft % 60;
    return `${minutesLeft.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  }

  return [timer, dispatch, getDisplay];
}
