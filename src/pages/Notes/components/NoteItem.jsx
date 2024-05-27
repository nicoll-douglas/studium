import TextareaAutosize from "react-textarea-autosize";
import DragButton from "../../../components/ui/buttons/DragButton";
import DeleteButton from "../../../components/ui/buttons/DeleteButton";
import EditButton from "../../../components/ui/buttons/EditButton";
import SaveButton from "../../../components/ui/buttons/SaveButton";
import actions from "../../../hooks/useCRUD/actions";
import "./NoteItem.css";

import { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

NoteItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default function NoteItem({ dispatch, data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [noteData, setNoteData] = useState(data);
  const [modal, setModal] = useState(
    searchParams.get("editing") === noteData.id
  );

  const {
    listeners,
    setNodeRef,
    transform,
    setActivatorNodeRef,
    isDragging,
    transition,
  } = useSortable({ id: noteData.id });

  const nodeRefStyles = {
    transition,
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
  };

  function handleDelete() {
    dispatch({
      type: actions.delete,
      payload: noteData,
    });
    setModal(false);
  }

  function handleSave() {
    dispatch({
      type: actions.update,
      payload: noteData,
    });
    setSearchParams({});
    setModal(false);
  }

  function handleEdit() {
    setSearchParams({ editing: noteData.id });
    setModal(true);
  }

  function handleInput(e, type) {
    const newData = { ...noteData };
    newData[type] = e.target.value;
    setNoteData(newData);
  }

  return (
    <div
      className={`${modal ? "wrapper" : ""} ${isDragging ? "z-50" : ""}`}
      ref={setNodeRef}
      style={nodeRefStyles}
    >
      <div
        className={`group/note-item p-4 border-LM-accent-light dark:border-DM-accent-light border rounded-xl flex items-start gap-2 max-w-[500px] sm:max-w-full bg-LM-primary dark:bg-DM-primary shadow-lg ${
          modal ? "modal" : ""
        }`}
      >
        <div className="flex flex-col flex-grow gap-2">
          <input
            type="text"
            className="bg-transparent text-lg text-ellipsis text-LM-accent-light dark:text-DM-accent-light"
            placeholder="Title..."
            disabled={!modal}
            spellCheck={false}
            value={noteData.title}
            onInput={(e) => handleInput(e, "title")}
          />
          <TextareaAutosize
            className="bg-transparent resize-none text-ellipsis overflow-y-hidden"
            placeholder="Note..."
            minRows={4}
            maxRows={modal ? 9999 : 4}
            disabled={!modal}
            spellCheck={false}
            value={noteData.text}
            onInput={(e) => handleInput(e, "text")}
          ></TextareaAutosize>
        </div>
        <div className="flex flex-col gap-2 ml-2 items-center">
          <DragButton
            visibilityTrigger="group-hover/note-item:visible"
            hidden={modal}
            ref={setActivatorNodeRef}
            {...listeners}
          />
          <EditButton
            visibilityTrigger="group-hover/note-item:visible"
            onClick={handleEdit}
            hidden={modal}
          />
          <DeleteButton
            visibilityTrigger="group-hover/note-item:visible"
            visible={modal}
            onClick={handleDelete}
          />
          <SaveButton hidden={!modal} onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}
