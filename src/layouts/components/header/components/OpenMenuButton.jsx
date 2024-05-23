export default function OpenMenuButton({ onClick, ariaExpanded }) {
  return (
    <button
      className="group relative"
      aria-label="Open menu"
      aria-haspopup="menu"
      aria-controls="site-menu"
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 -960 960 960"
        className="fill-LM-accent-light dark:fill-DM-accent-light group-hover:fill-LM-accent-dark dark:group-hover:fill-DM-accent-dark"
        aria-hidden="true"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </button>
  );
}
