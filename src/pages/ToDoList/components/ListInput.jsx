import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AddButton from "../../../components/ui/buttons/AddButton";

export default function ListInput({ createrCallback }) {
  const [data, setData] = useState({ text: "" });

  function handleAdd() {
    createrCallback({ text: data.text });
    setData({ text: "" });
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
      <TextareaAutosize
        type="data"
        minRows={1}
        value={data.text}
        onInput={(e) => setData({ text: e.target.value })}
        className="bg-transparent p-4 pr-14 rounded-xl flex-grow resize-none"
        placeholder="Add a to do..."
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
          }
        }}
      ></TextareaAutosize>
      <AddButton onClick={handleAdd} label="add item to list" />
    </div>
  );
}
