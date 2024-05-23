export default function closeMenuButton({ onClick, ariaExpanded }) {
  return (
    <button
      className="group"
      aria-label="Close menu"
      aria-controls="site-menu"
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark"
        aria-hidden="true"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  );
}
