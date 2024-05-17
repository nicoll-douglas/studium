import TextareaAutosize from "react-textarea-autosize";
import DragButton from "../../../components/ui/buttons/DragButton";
import DeleteButton from "../../../components/ui/buttons/DeleteButton";
import EditButton from "../../../components/ui/buttons/EditButton";
import SaveButton from "../../../components/ui/buttons/SaveButton";
import "./NoteItem.css";

import { useState } from "react";
import { useImmer } from "use-immer";
import { useSortable } from "@dnd-kit/sortable";

export default function NoteItem({ deleteCallback, saveCallback, content }) {
  const [modal, setModal] = useState(false);
  const [data, setData] = useImmer(content);

  const {
    listeners,
    setNodeRef,
    transform,
    setActivatorNodeRef,
    isDragging,
    transition,
  } = useSortable({ id: content.id });

  function handleDelete() {
    deleteCallback(data);
    setModal(false);
  }

  function handleSave() {
    saveCallback(data);
    setModal(false);
  }

  function handleInput(e, type) {
    const newData = { ...data };
    newData[type] = e.target.value;
    setData(newData);
  }

  return (
    <div
      className={`${modal ? "wrapper" : ""} ${isDragging ? "z-50" : ""}`}
      ref={setNodeRef}
      style={{
        transition,
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "",
      }}
    >
      <div
        className={`group/note-item p-4 border-LM-accent-light dark:border-DM-accent-light border rounded-xl flex items-start gap-2 max-w-[500px] sm:max-w-full bg-LM-primary dark:bg-DM-primary ${
          modal ? "modal" : ""
        }`}
      >
        <div className="flex flex-col flex-grow gap-2">
          <input
            type="text"
            className="bg-transparent text-lg text-ellipsis text-LM-accent-light dark:text-DM-accent-light"
            placeholder="Title..."
            disabled={!modal}
            value={data.title}
            onInput={(e) => handleInput(e, "title")}
          />
          <TextareaAutosize
            className="bg-transparent resize-none text-ellipsis overflow-y-hidden"
            placeholder="Note..."
            minRows={4}
            maxRows={modal ? 9999 : 4}
            disabled={!modal}
            value={data.text}
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
            onClick={() => setModal(true)}
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