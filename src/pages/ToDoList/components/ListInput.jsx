import TextareaAutosize from "react-textarea-autosize";
import AddButton from "../../../components/ui/buttons/AddButton";
import actions from "../../../hooks/useCRUD/actions";

import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { SRContext } from "../../../layouts/AppLayout";

ListInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default function ListInput({ dispatch }) {
  const [data, setData] = useState({ text: "" });
  const setLiveRegion = useContext(SRContext);

  function handleAdd() {
    if (data.text) {
      dispatch({
        type: actions.create,
        payload: data,
      });
      setLiveRegion(`Sucessfuly added ${data.text} to to do list`);
      setData({ text: "" });
    } else {
      setLiveRegion("To do list input empty, nothing added");
    }
  }

  function handleInput(e) {
    setData({ text: e.target.value });
  }

  return (
    <section
      className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light rounded-xl flex gap-4 items-start space-between max-w-full relative p-4"
      aria-label="List item creation"
    >
      <TextareaAutosize
        type="data"
        minRows={1}
        value={data.text}
        onInput={handleInput}
        className="bg-transparent flex-grow resize-none"
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
      <AddButton onClick={handleAdd} aria-label="Add item to list" />
    </section>
  );
}
