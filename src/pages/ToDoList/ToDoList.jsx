import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";
import NoItems from "./components/NoItems";
import reorderList from "../../utils/reorderList";
import useCRUD from "../../hooks/useCRUD";

export default function ToDoList() {
  const [list, setList, operations] = useCRUD("toDoList");

  let rendered;
  if (list.length === 0) {
    rendered = <NoItems />;
  } else {
    rendered = list.map((listElement) => {
      return (
        <ListItem
          data={listElement}
          key={listElement.id}
          updaterCallback={operations.update}
          deleterCallback={operations.remove}
        />
      );
    });
  }

  return (
    <Container className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      <Heading variant="To Do List" />
      <ListInput createrCallback={operations.create} />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={(e) => reorderList(e, list, setList)}
      >
        <SortableContext items={list} strategy={verticalListSortingStrategy}>
          <ul
            className="border border-LM-accent-light dark:border-DM-accent-light py-4 rounded-xl shadow-lg max-w-full flex-col"
            id="to-do-list-items"
            aria-label="To do list"
          >
            {rendered}
          </ul>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
