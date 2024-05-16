import { useState } from "react";

export default function ListInput({ callback }) {
  const [value, setValue] = useState("");

  function handleClick() {
    callback(value);
    setValue("");
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-center space-between max-w-full relative">
      <input
        type="text"
        value={value}
        onInput={(e) => setValue(e.target.value)}
        className="bg-transparent p-4 pr-14 rounded-xl flex-grow"
        placeholder="Add a to do..."
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
      />
      <button
        className="absolute right-0 mx-4 group"
        aria-label="add item to list"
        onClick={handleClick}
      >
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
    </div>
  );
}
