import { useState } from "react";
import Section from "./Section";
import NoItems from "../../../components/ui/NoItems";

export default function BookmarksPreview() {
  const [bookmarks] = useState(() => {
    const storedBookmarks = localStorage.bookmarks;
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  function getRendered() {
    if (bookmarks.length === 0) {
      return <NoItems>You have no bookmarks</NoItems>;
    } else {
      return (
        <ul className="w-full mt-4 overflow-y-auto flex flex-col gap-2">
          {bookmarks.map((bookmark) => {
            return (
              <li key={bookmark.id} className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-LM-accent-light dark:fill-DM-accent-light min-w-6"
                >
                  <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                </svg>
                <a
                  href={bookmark.URL}
                  target="_blank"
                  className="blocko text-ellipsis text-nowrap overflow-hidden"
                >
                  {bookmark.name}
                </a>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <Section variant="Bookmarks" title="Your Bookmarks">
      {getRendered()}
    </Section>
  );
}
