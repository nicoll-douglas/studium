import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import BookmarkInput from "./components/BookmarkInput";
import Bookmark from "./components/Bookmark";
import NoBookmarks from "./components/NoBookmarks";
import useCRUD from "../../hooks/useCRUD";
import reorderList from "../../utils/reorderList";

import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

export default function Bookmarks() {
  const [bookmarks, setBookmarks, operations] = useCRUD("bookmarks");

  let rendered;
  if (bookmarks.length === 0) {
    rendered = <NoBookmarks />;
  } else {
    rendered = bookmarks.map((bookmark) => {
      return (
        <Bookmark key={bookmark.id} data={bookmark} operations={operations} />
      );
    });
  }

  return (
    <Container>
      <Heading variant="Bookmarks" />
      <BookmarkInput operations={operations} />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={(e) => reorderList(e, bookmarks, setBookmarks)}
      >
        <SortableContext
          items={bookmarks}
          strategy={verticalListSortingStrategy}
        >
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
