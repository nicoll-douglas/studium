import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import BookmarkInput from "./components/BookmarkInput";
import Bookmark from "./components/Bookmark";
import NoBookmarks from "./components/NoBookmarks";
import useCRUD from "../../hooks/useCRUD/useCRUD";

import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import actions from "../../hooks/useCRUD/actions";

export default function Bookmarks() {
  const [bookmarks, dispatch] = useCRUD("bookmarks");

  function handleDragEnd(e) {
    dispatch({
      type: actions.swap,
      payload: e,
    });
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
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext
          items={bookmarks}
          strategy={verticalListSortingStrategy}
        >
          <ul
            className="border border-LM-accent-light dark:border-DM-accent-light py-4 rounded-xl shadow-lg max-w-full flex flex-col"
            aria-label="Bookmarks"
          >
            {getBookmarks()}
          </ul>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
