import PropTypes from "prop-types";

SkipButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function SkipButton({ onClick }) {
  return (
    <button title="Skip timer" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        aria-hidden="true"
      >
        <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
      </svg>
    </button>
  );
}
