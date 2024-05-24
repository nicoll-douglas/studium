import PropTypes from "prop-types";

TimerDisplay.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default function TimerDisplay({ timeLeft, fullscreen }) {
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div
      className={`w-full  flex items-center justify-center border-2 border-LM-accent-light dark:border-DM-accent-light rounded-2xl h-64 text-8xl xs:h-40 xs:text-7xl ${
        fullscreen ? "" : "shadow-lg"
      }`}
    >
      <div>{`${minutesLeft.toString().padStart(2, "0")}:${secondsLeft
        .toString()
        .padStart(2, "0")}`}</div>
    </div>
  );
}
