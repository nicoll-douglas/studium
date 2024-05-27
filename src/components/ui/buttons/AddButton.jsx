import PropTypes from "prop-types";

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default function AddButton({ onClick, label }) {
  return (
    <button className="group" onClick={onClick} aria-label={label}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        aria-hidden="true"
        className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark"
      >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
    </button>
  );
}
