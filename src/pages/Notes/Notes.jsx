import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";
import reorderList from "../../utils/reorderList";
import NoNotes from "./components/NoNotes";

import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function Notes() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.notes;
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.notes = JSON.stringify(notes);
  }, [notes]);

  function handleSave({ id, text, title }) {
    setNotes(
      notes.map((note) => {
        return note.id === id ? { ...note, text, title } : note;
      })
    );
  }

  function handleDelete({ id }) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleNewNote({ title, text }) {
    setNotes([
      ...notes,
      {
        id: crypto.randomUUID(),
        title,
        text,
      },
    ]);
  }

  let rendered;
  if (notes.length === 0) {
    rendered = <NoNotes />;
  } else {
    rendered = notes.map((note) => {
      return (
        <NoteItem
          content={note}
          key={note.id}
          saveCallback={handleSave}
          deleteCallback={handleDelete}
        />
      );
    });
  }

  return (
    <>
      <Container>
        <Heading variant="Notes" />
        <NoteInput newItemCallback={handleNewNote} />
      </Container>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(e) => reorderList(e, notes, setNotes)}
      >
        <SortableContext items={notes}>
          <div className="w-full mt-8 grid grid-cols-3 gap-4 max-w-[1536px] xl:flex xl:flex-col xl:max-w-[500px] lg:max-w-[390px] sm:flex-grow sm:max-w-full mx-4 xl:px-0">
            {rendered}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
}
