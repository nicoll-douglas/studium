export default function TimerDisplay({ timeLeft }) {
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div className="w-full border-2 border-LM-accent-light dark:border-DM-accent-light rounded-2xl h-64 shadow-inner flex items-center justify-center xs:h-40 text-8xl xs:text-7xl">
      <div>{`${minutesLeft.toString().padStart(2, "0")}:${secondsLeft
        .toString()
        .padStart(2, "0")}`}</div>
    </div>
  );
}
