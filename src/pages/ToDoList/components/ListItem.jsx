import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import TextareaAutosize from "react-textarea-autosize";

export default function ListItem({
  content,
  editCallback,
  deleteCallback,
  id,
}) {
  const [text, setText] = useState(content);

  const {
    listeners,
    setNodeRef,
    transform,
    setActivatorNodeRef,
    isDragging,
    transition,
  } = useSortable({ id: id });

  function handleInput(e, id) {
    editCallback(e.target.value, id);
    setText(e.target.value);
  }

  return (
    <li
      className={`rounded-md max-w-full text-wrap flex relative px-4 py-1 items-start group/list-item bg-LM-primary dark:bg-DM-primary ${
        isDragging ? "z-50" : "z-10"
      }`}
      ref={setNodeRef}
      style={{
        transition,
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "",
      }}
    >
      <button
        className="max-h-5 min-h-5 min-w-5 max-w-5 rounded-full border border-LM-accent-light dark:border-DM-accent-light cursor-pointer flex items-center justify-center group translate-y-[2px]"
        onClick={() => deleteCallback(id)}
      >
        <div className="max-h-2 min-h-2 max-w-2 min-w-2 rounded-full bg-LM-accent-light dark:bg-DM-accent-light invisible group-hover:visible group-focus:visible"></div>
      </button>
      <TextareaAutosize
        className="bg-transparent ml-3 flex-grow cursor-text resize-none break-words"
        value={text}
        minRows={1}
        onInput={(e) => handleInput(e, id)}
        placeholder="Empty to do..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();
          }
        }}
      ></TextareaAutosize>
      <button className="group ml-2" ref={setActivatorNodeRef} {...listeners}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-LM-accent-light dark:fill-DM-accent-light group-hover:fill-LM-accent-dark dark:group-hover:fill-DM-accent-dark invisible group-hover/list-item:visible group-focus-visible:visible"
          aria-label="drag list item"
        >
          <path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" />
        </svg>
      </button>
    </li>
  );
}
