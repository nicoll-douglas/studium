export default function SaveButton({ hidden, onClick, visibilityTrigger }) {
  return (
    <button className={hidden ? "hidden" : "group"} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className={`fill-LM-accent-light dark:fill-DM-accent-light group-hover:fill-LM-accent-dark dark:group-hover:fill-DM-accent-dark group-focus-visible:visible ${visibilityTrigger}`}
      >
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>
    </button>
  );
}
