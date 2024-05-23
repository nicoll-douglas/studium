export default function TimerDisplay({ timeLeft }) {
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div
      className={`w-full  flex items-center justify-center border-2 border-LM-accent-light dark:border-DM-accent-light rounded-2xl h-64 text-8xl xs:h-40 xs:text-7xl}`}
    >
      <div>{`${minutesLeft.toString().padStart(2, "0")}:${secondsLeft
        .toString()
        .padStart(2, "0")}`}</div>
    </div>
  );
}
