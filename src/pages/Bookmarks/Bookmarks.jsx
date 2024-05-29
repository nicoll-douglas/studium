import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import BookmarkInput from "./components/BookmarkInput";
import Bookmark from "./components/Bookmark";
import NoBookmarks from "./components/NoBookmarks";
import useCRUD from "../../hooks/useCRUD/useCRUD";
import useTouch from "../../hooks/useTouch";
import actions from "../../hooks/useCRUD/actions";

import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { useState } from "react";

export default function Bookmarks() {
  const [bookmarks, dispatch] = useCRUD("bookmarks");
  const [activeId, setActiveId] = useState(null);
  const sensors = useTouch();

  function handleDragStart(e) {
    setActiveId(e.active.id);
  }

  function handleDragEnd(e) {
    dispatch({
      type: actions.swap,
      payload: e,
    });
    setActiveId(null);
  }

  function getBookmarks() {
    if (bookmarks.length === 0) {
      return <NoBookmarks />;
    } else {
      return bookmarks.map((bookmark) => {
        return (
          <Bookmark key={bookmark.id} data={bookmark} dispatch={dispatch} />
        );
      });
    }
  }

  return (
    <Container>
      <Heading variant="Bookmarks" />
      <BookmarkInput dispatch={dispatch} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <SortableContext
          items={bookmarks.map((bookmark) => bookmark.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul
            className="border border-LM-accent-light dark:border-DM-accent-light py-4 rounded-xl max-w-full flex flex-col"
            aria-label="Bookmarks"
          >
            {getBookmarks()}
          </ul>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <Bookmark
              data={bookmarks.find((bookmark) => bookmark.id === activeId)}
              dispatch={dispatch}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </Container>
  );
}
