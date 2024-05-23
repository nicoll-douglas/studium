import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";
import reorderList from "../../utils/reorderList";
import NoNotes from "./components/NoNotes";
import useCRUD from "../../hooks/useCRUD";

import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function Notes() {
  const [notes, setNotes, operations] = useCRUD("notes");

  let rendered;
  if (notes.length === 0) {
    rendered = <NoNotes />;
  } else {
    rendered = notes.map((note) => {
      return <NoteItem data={note} key={note.id} operations={operations} />;
    });
  }

  return (
    <>
      <Container>
        <Heading variant="Notes" />
        <NoteInput operations={operations} />
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
