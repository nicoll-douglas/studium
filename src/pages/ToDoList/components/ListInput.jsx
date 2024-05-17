import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AddButton from "../../../components/ui/buttons/AddButton";

export default function ListInput({ newItemCallback }) {
  const [text, setText] = useState("");

  function handleClick() {
    newItemCallback(text);
    setText("");
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
      <TextareaAutosize
        type="text"
        minRows={1}
        value={text}
        onInput={(e) => setText(e.target.value)}
        className="bg-transparent p-4 pr-14 rounded-xl flex-grow resize-none"
        placeholder="Add a to do..."
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
      ></TextareaAutosize>
      <AddButton onClick={handleClick} label="add item to list" />
    </div>
  );
}
