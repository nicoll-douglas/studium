import PropTypes from "prop-types";

ToggleInfoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default function ToggleInfoButton({ onClick, expanded }) {
  return (
    <button
      className="group"
      aria-controls="about-pomodoro"
      aria-expanded={expanded}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        aria-hidden="true"
        className={`${
          expanded ? "rotate-90" : "-rotate-90"
        } fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark transition-transform duration-300`}
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      </svg>
    </button>
  );
}
