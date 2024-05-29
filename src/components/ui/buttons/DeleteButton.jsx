import PropTypes from "prop-types";

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visibilityTrigger: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

export default function DeleteButton({
  onClick,
  visibilityTrigger,
  visible,
  ...rest
}) {
  return (
    <button
      className="group md:block"
      onClick={onClick}
      aria-label="delete"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className={`fill-LM-accent-light dark:fill-DM-accent-light group-hover:fill-LM-accent-dark dark:group-hover:fill-DM-accent-dark group-focus-visible:visible md:visible ${visibilityTrigger} ${
          visible ? "visible" : "invisible"
        }`}
      >
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
      </svg>
    </button>
  );
}
