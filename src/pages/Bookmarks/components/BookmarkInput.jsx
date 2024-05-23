import { useState } from "react";
import AddButton from "../../../components/ui/buttons/AddButton";
import PropTypes from "prop-types";

BookmarkInput.propTypes = {
  operations: PropTypes.object.isRequired,
};

export default function BookmarkInput({ operations }) {
  const [data, setData] = useState({ name: "", URL: "" });

  function handleAdd() {
    operations.create({ name: data.name, URL: data.URL, pinned: false });
    setData({ name: "", URL: "" });
  }

  function handleInput(e, type) {
    const newData = { ...data };
    newData[type] = e.target.value;
    setData(newData);
  }

  return (
    <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
      <div className="p-4 pr-14 rounded-xl flex-grow flex flex-col gap-2">
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
      <AddButton label="add note" onClick={handleAdd} />
    </div>
  );
}
