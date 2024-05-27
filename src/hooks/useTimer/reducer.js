import actions from "./actions";

export default function reducer(timer, action) {
  switch (action.type) {
    case actions.skip: {
      let minutes, pomodoroNumber;
      if (timer.minutes === 25) {
        minutes = timer.pomodoroNumber % 4 === 0 ? 15 : 5;
        pomodoroNumber = timer.pomodoroNumber;
      } else {
        minutes = 25;
        pomodoroNumber = timer.pomodoroNumber + 1;
      }

      return {
        active: false,
        pomodoroNumber,
        minutes,
        timeLeft: minutes * 60,
      };
    }

    case actions.set: {
      const minutes = action.payload.minutes;
      return {
        ...timer,
        active: false,
        minutes,
        timeLeft: minutes * 60,
      };
    }

    case actions.toggle: {
      return {
        ...timer,
        active: !timer.active,
      };
    }

    case actions.progress: {
      return {
        ...timer,
        timeLeft: timer.timeLeft - 1,
      };
    }

    default:
      return timer;
  }
}
