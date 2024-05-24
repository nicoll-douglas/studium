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
import useCRUD from "../../hooks/useCRUD/useCRUD";
import actions from "../../hooks/useCRUD/actions";

export default function ToDoList() {
  const [list, dispatch] = useCRUD("toDoList");

  function handleDragEnd(e) {
    dispatch({
      type: actions.swap,
      payload: e,
    });
  }

  function getRendered() {
    if (list.length === 0) {
      return <NoItems />;
    } else {
      return list.map((listElement) => {
        return (
          <ListItem
            data={listElement}
            key={listElement.id}
            dispatch={dispatch}
          />
        );
      });
    }
  }

  return (
    <Container className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      <Heading variant="To Do List" />
      <ListInput dispatch={dispatch} />
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext items={list} strategy={verticalListSortingStrategy}>
          <ul
            className="border border-LM-accent-light dark:border-DM-accent-light py-4 rounded-xl shadow-lg max-w-full flex-col"
            id="to-do-list-items"
            aria-label="To do list"
          >
            {getRendered()}
          </ul>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
