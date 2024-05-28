import { useContext, useState } from "react";
import AddButton from "../../../components/ui/buttons/AddButton";
import PropTypes from "prop-types";
import actions from "../../../hooks/useCRUD/actions";
import { SRContext } from "../../../layouts/AppLayout";

BookmarkInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default function BookmarkInput({ dispatch }) {
  const [data, setData] = useState({ name: "", URL: "" });
  const setLiveRegion = useContext(SRContext);

  function handleAdd() {
    if (data.name || data.URL) {
      dispatch({
        type: actions.create,
        payload: data,
      });
      setData({ name: "", URL: "" });
      setLiveRegion(`Successfully added ${data.name} bookmark`);
    } else {
      setLiveRegion("Both input fields empty, nothing added");
    }
  }

  function handleInput(e, type) {
    const newData = { ...data };
    newData[type] = e.target.value;
    setData(newData);
  }

  return (
    <section
      className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative p-4"
      aria-label="Bookmark creation"
    >
      <div className="rounded-xl flex-grow flex flex-col gap-2">
        <input
          value={data.name}
          type="text"
          placeholder="Name"
          className="bg-transparent w-full"
          onInput={(e) => handleInput(e, "name")}
        />
        <input
          value={data.URL}
          className="bg-transparent w-full"
          placeholder="URL"
          type="text"
          onInput={(e) => handleInput(e, "URL")}
        />
      </div>
      <AddButton aria-label="Add bookmark" onClick={handleAdd} />
    </section>
  );
}
