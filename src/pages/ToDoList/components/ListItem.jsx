import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import TextareaAutosize from "react-textarea-autosize";
import DragButton from "../../../components/ui/buttons/DragButton";

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
  } = useSortable({ id });

  function handleInput(e, id) {
    const text = e.target.value;
    editCallback(text, id);
    setText(text);
  }

  return (
    <li
      className={`rounded-md max-w-full text-wrap flex relative px-4 py-1 items-start group/list-item bg-LM-primary dark:bg-DM-primary ${
        isDragging ? "z-50 shadow-2xl" : "z-10"
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
        className="bg-transparent ml-3 flex-grow cursor-text resize-none break-words mr-2"
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
      <DragButton
        ref={setActivatorNodeRef}
        visibilityTrigger="group-hover/list-item:visible"
        hidden={false}
        {...listeners}
      />
    </li>
  );
}
