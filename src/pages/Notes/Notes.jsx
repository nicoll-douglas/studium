import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";
import NoNotes from "./components/NoNotes";
import useCRUD from "../../hooks/useCRUD/useCRUD";
import actions from "../../hooks/useCRUD/actions";

import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import useTouch from "../../hooks/useTouch";
import { useState } from "react";

export default function Notes() {
  const [notes, dispatch] = useCRUD("notes");
  const [activeId, setActiveId] = useState(null);
  const sensors = useTouch();

  function handleDragEnd(e) {
    dispatch({
      type: actions.swap,
      payload: e,
    });
    setActiveId(null);
  }

  function handleDragStart(e) {
    setActiveId(e.active.id);
  }

  function getRendered() {
    if (notes.length === 0) {
      return <NoNotes />;
    } else {
      return notes.map((note) => {
        return <NoteItem data={note} key={note.id} dispatch={dispatch} />;
      });
    }
  }

  return (
    <>
      <Container>
        <Heading variant="Notes" />
        <NoteInput dispatch={dispatch} />
      </Container>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        sensors={sensors}
      >
        <SortableContext items={notes.map((note) => note.id)}>
          <div className="w-full mt-8 grid grid-cols-3 gap-4 max-w-[1536px] xl:flex xl:flex-col xl:max-w-[500px] lg:max-w-[390px] sm:flex-grow sm:max-w-full mx-4 xl:px-0">
            {getRendered()}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <NoteItem
              data={notes.find((note) => note.id === activeId)}
              dispatch={dispatch}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
