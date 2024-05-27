import EditButton from "../../../components/ui/buttons/EditButton";
import DragButton from "../../../components/ui/buttons/DragButton";
import SaveButton from "../../../components/ui/buttons/SaveButton";
import DeleteButton from "../../../components/ui/buttons/DeleteButton";

import { useEffect, useRef, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";
import actions from "../../../hooks/useCRUD/actions";

Bookmark.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default function Bookmark({ dispatch, data }) {
  const [bookmarkData, setBookmarkData] = useState(data);
  const [editing, setEditing] = useState(false);
  const bookmarkNameInputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      bookmarkNameInputRef.current.focus();
    }
  }, [editing]);

  const {
    listeners,
    setNodeRef,
    transform,
    setActivatorNodeRef,
    isDragging,
    transition,
  } = useSortable({ id: bookmarkData.id });

  const nodeRefStyles = {
    transition,
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
  };

  function handleSave() {
    dispatch({
      type: actions.update,
      payload: bookmarkData,
    });
    setEditing(false);
  }

  function handleDelete() {
    dispatch({
      type: actions.delete,
      payload: bookmarkData,
    });
  }

  function handleInput(e, type) {
    const newData = { ...bookmarkData };
    newData[type] = e.target.value;
    setBookmarkData(newData);
  }

  return (
    <li
      className={`rounded-md gap-2 max-w-full text-wrap flex relative px-4 py-1 items-start group/bookmark bg-LM-primary dark:bg-DM-primary ${
        isDragging ? "z-50" : "z-10"
      }`}
      ref={setNodeRef}
      style={nodeRefStyles}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-LM-accent-light dark:fill-DM-accent-light min-w-6"
      >
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
      </svg>
      <div
        className={`flex flex-col flex-grow gap-2 ${
          editing ? "" : "overflow-hidden"
        }`}
      >
        <a
          href={bookmarkData.URL}
          className={` max-w-fit text-nowrap text-ellipsis overflow-hidden ${
            editing ? "hidden" : "block"
          }`}
          target="_blank"
        >
          {bookmarkData.name}
        </a>
        <input
          value={bookmarkData.name}
          className="bg-transparent"
          placeholder="Untitled..."
          ref={bookmarkNameInputRef}
          hidden={!editing}
          onInput={(e) => handleInput(e, "name")}
        />
        <input
          value={bookmarkData.URL}
          className="bg-transparent text-LM-accent-light dark:text-DM-accent-light"
          placeholder="URL..."
          hidden={!editing}
          onInput={(e) => handleInput(e, "URL")}
        />
      </div>
      <div className="flex gap-1">
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
          onClick={handleDelete}
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
