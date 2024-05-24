import TextareaAutosize from "react-textarea-autosize";
import AddButton from "../../../components/ui/buttons/AddButton";

import { useState } from "react";
import PropTypes from "prop-types";
import actions from "../../../hooks/useCRUD/actions";

NoteInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default function NoteInput({ dispatch }) {
  const [data, setData] = useState({ text: "", title: "" });

  function handleInput(e, type) {
    const newData = { ...data };
    newData[type] = e.target.value;
    setData(newData);
  }

  function handleAdd() {
    if (data.text || data.title) {
      dispatch({
        type: actions.create,
        payload: data,
      });
      setData({ text: "", title: "" });
    }
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
      <div className="p-4 pr-14 rounded-xl flex-grow flex flex-col gap-2">
        <input
          type="text"
          placeholder="Note title..."
          className="bg-transparent w-full text-lg"
          value={data.title}
          spellCheck={false}
          onInput={(e) => handleInput(e, "title")}
        />
        <TextareaAutosize
          className="bg-transparent resize-none overflow-hidden"
          minRows={2}
          placeholder="Enter a note..."
          value={data.text}
          spellCheck={false}
          onInput={(e) => handleInput(e, "text")}
        ></TextareaAutosize>
      </div>
      <AddButton label="add note" onClick={handleAdd} />
    </div>
  );
}
