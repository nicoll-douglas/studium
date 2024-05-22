export default function FifteenButton({ onClick, pressed }) {
  return (
    <button
      title="Set 15 minute timer (long break)"
      className="text-3xl xs:text-2xl"
      aria-pressed={pressed}
      onClick={onClick}
    >
      15
    </button>
  );
}
