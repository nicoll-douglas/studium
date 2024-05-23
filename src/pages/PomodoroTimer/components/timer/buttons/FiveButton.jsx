import PropTypes from "prop-types";

FiveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  pressed: PropTypes.bool.isRequired,
};

export default function FiveButton({ onClick, pressed }) {
  return (
    <button
      title="Set 5 minute timer (short break)"
      className="text-3xl xs:text-2xl"
      aria-pressed={pressed}
      onClick={onClick}
    >
      5
    </button>
  );
}
