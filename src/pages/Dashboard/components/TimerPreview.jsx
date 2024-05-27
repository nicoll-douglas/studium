import { useContext } from "react";

import Section from "./Section";
import { TimerContext } from "../../../layouts/AppLayout";
import ToggleTimerButton from "../../PomodoroTimer/components/timer/buttons/ToggleTimerButton";
import SkipButton from "../../PomodoroTimer/components/timer/buttons/SkipButton";
import actions from "../../../hooks/useTimer/actions";
import "./TimerPreview.css";

export default function TimerPreview() {
  const [timer, dispatch, getDisplay] = useContext(TimerContext);

  return (
    <Section variant="Pomodoro Timer" title="Current Timer">
      <div
        className="gap-4 w-full h-full flex flex-col items-center justify-center text-center"
        id="timer-preview"
      >
        <div>{`Pomodoro #${timer.pomodoroNumber}!`}</div>
        <div className="text-8xl md:text-7xl sm:text-8xl xs:text-7xl">
          {getDisplay()}
        </div>
        <div className="flex gap-2">
          <ToggleTimerButton
            onClick={() => dispatch({ type: actions.toggle })}
            pressed={timer.active}
          />
          <SkipButton onClick={() => dispatch({ type: actions.skip })} />
        </div>
      </div>
    </Section>
  );
}
