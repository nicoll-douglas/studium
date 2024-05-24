import TextareaAutosize from "react-textarea-autosize";
import AddButton from "../../../components/ui/buttons/AddButton";
import actions from "../../../hooks/useCRUD/actions";

import { useState } from "react";
import PropTypes from "prop-types";

ListInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default function ListInput({ dispatch }) {
  const [data, setData] = useState({ text: "" });

  function handleAdd() {
    if (data.text) {
      dispatch({
        type: actions.create,
        payload: data,
      });
      setData({ text: "" });
    }
  }

  function handleInput(e) {
    setData({ text: e.target.value });
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
      <TextareaAutosize
        type="data"
        minRows={1}
        value={data.text}
        onInput={handleInput}
        className="bg-transparent p-4 pr-14 rounded-xl flex-grow resize-none"
        placeholder="Add a to do..."
        autoComplete="off"
        spellCheck={false}
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
