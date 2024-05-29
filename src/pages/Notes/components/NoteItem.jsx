import TextareaAutosize from "react-textarea-autosize";
import DragButton from "../../../components/ui/buttons/DragButton";
import DeleteButton from "../../../components/ui/buttons/DeleteButton";
import EditButton from "../../../components/ui/buttons/EditButton";
import SaveButton from "../../../components/ui/buttons/SaveButton";
import actions from "../../../hooks/useCRUD/actions";

import { useEffect, useRef, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

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
  const dialogRef = useRef(null);

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

  useEffect(() => {
    if (modal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [modal]);

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

  function handleEscape(e) {
    if (e.key === "Escape") setModal(false);
  }

  return (
    <div
      className={`${isDragging ? "z-50 opacity-50" : ""} bg-transparent`}
      ref={setNodeRef}
      style={nodeRefStyles}
    >
      <dialog
        className={`bg-transparent group/note-item text-LM-neutral overflow-hidden dark:text-DM-neutral block relative ${
          modal
            ? "w-[500px]"
            : "relative min-w-full min-h-full grid grid-cols-1 grid-rows-1"
        }`}
        ref={dialogRef}
        aria-label={noteData.title}
        aria-modal={modal}
        id={noteData.id}
        onKeyDown={handleEscape}
      >
        <div className="border-LM-accent-light overflow-hidden dark:border-DM-accent-light border max-w-[500px] rounded-xl sm:max-w-full bg-transparent">
          <div
            className="flex items-start gap-2 overflow-y-auto relative p-4 col-span-1 row-span-1 bg-LM-primary dark:bg-DM-primary"
            style={{
              maxHeight: modal ? "calc(100vh - 100px)" : "",
            }}
          >
            <div className="flex flex-col flex-grow gap-2">
              <input
                type="text"
                className="bg-transparent text-lg text-ellipsis text-LM-accent-light  M-accent-light dark:text-DM-accent-light"
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
                aria-describedby={noteData.id}
              />
              <EditButton
                visibilityTrigger="group-hover/note-item:visible"
                onClick={handleEdit}
                hidden={modal}
                aria-haspopup="dialog"
                aria-expanded={modal}
                aria-controls={noteData.id}
              />
              <DeleteButton
                visibilityTrigger="group-hover/note-item:visible"
                visible={modal}
                onClick={handleDelete}
              />
              <SaveButton
                hidden={!modal}
                onClick={handleSave}
                title="Close dialog"
                aria-expanded={modal}
                aria-controls={noteData.id}
              />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
