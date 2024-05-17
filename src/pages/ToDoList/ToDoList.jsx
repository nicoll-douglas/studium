import { useImmer } from "use-immer";
import { useEffect } from "react";
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

export default function ToDoList() {
  const [list, setList] = useImmer(() => {
    const storedList = localStorage.toDoList;
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.toDoList = JSON.stringify(list);
  }, [list]);

  function handleNewItem(text) {
    setList([
      ...list,
      {
        text,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleEdit(text, id) {
    setList(
      list.map((listItem) => {
        return listItem.id === id ? { ...listItem, text } : listItem;
      })
    );
  }

  function handleDelete(id) {
    setList(list.filter((listElement) => listElement.id !== id));
  }

  let rendered;
  if (list.length === 0) {
    rendered = <NoItems />;
  } else {
    rendered = list.map((listElement) => {
      return (
        <ListItem
          content={listElement.text}
          key={listElement.id}
          id={listElement.id}
          editCallback={handleEdit}
          deleteCallback={handleDelete}
        />
      );
    });
  }

  return (
    <Container className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      <Heading variant="To Do List" />
      <ListInput newItemCallback={handleNewItem} />
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
