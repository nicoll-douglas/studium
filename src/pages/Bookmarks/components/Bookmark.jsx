import EditButton from "../../../components/ui/buttons/EditButton";
import DragButton from "../../../components/ui/buttons/DragButton";
import SaveButton from "../../../components/ui/buttons/SaveButton";
import DeleteButton from "../../../components/ui/buttons/DeleteButton";

import { useEffect, useRef, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

Bookmark.propTypes = {
  operations: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default function Bookmark({ operations, data }) {
  const [bookmarkData, setBookmarkData] = useState(data);
  const [editing, setEditing] = useState(false);
  const bookmarkNameInputRef = useRef(null);

  const {
    listeners,
    setNodeRef,
    transform,
    setActivatorNodeRef,
    isDragging,
    transition,
  } = useSortable({ id: bookmarkData.id });

  useEffect(() => {
    if (editing) {
      bookmarkNameInputRef.current.focus();
    }
  }, [editing]);

  function handleSave() {
    operations.update(bookmarkData.id, {
      name: bookmarkData.name,
      URL: bookmarkData.URL,
    });
    setEditing(false);
  }

  function handleInput(e, type) {
    const newData = { ...bookmarkData };
    newData[type] = e.target.value;
    setBookmarkData(newData);
  }

  return (
    <li
      className={`rounded-md max-w-full text-wrap flex relative px-4 py-1 items-start group/bookmark bg-LM-primary dark:bg-DM-primary ${
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-LM-accent-light dark:fill-DM-accent-light"
      >
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
      </svg>
      <div className="flex flex-col flex-grow gap-2 ml-3">
        <a
          href={bookmarkData.URL}
          hidden={editing}
          className="max-w-fit"
          target="_blank"
        >
          {bookmarkData.name}
        </a>
        <input
          value={bookmarkData.name}
          className="bg-transparent"
          placeholder="Bookmark name..."
          ref={bookmarkNameInputRef}
          hidden={!editing}
          onInput={(e) => handleInput(e, "name")}
        />
        <input
          value={bookmarkData.URL}
          className="bg-transparent text-LM-accent-light dark:text-DM-accent-light"
          placeholder="Bookmark URL..."
          hidden={!editing}
          onInput={(e) => handleInput(e, "URL")}
        />
      </div>
      <div className="flex gap-1 ml-2">
        <EditButton
          hidden={editing}
          visibilityTrigger="group-hover/bookmark:visible"
          onClick={() => setEditing(true)}
        />
        <SaveButton
          hidden={!editing}
          visibilityTrigger="group-hover/bookmark:visible"
          onClick={handleSave}
        />
        <DeleteButton
          visible={false}
          visibilityTrigger="group-hover/bookmark:visible"
          onClick={() => operations.remove(bookmarkData.id)}
        />
        <DragButton
          ref={setActivatorNodeRef}
          visibilityTrigger="group-hover/bookmark:visible"
          hidden={false}
          {...listeners}
        />
      </div>
    </li>
  );
}
