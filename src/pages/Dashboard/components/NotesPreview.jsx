import NoItems from "../../../components/ui/NoItems";
import Section from "./Section";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function NotesPreview() {
  const [notes] = useState(() => {
    const storedNotes = localStorage.notes;
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  function getRendered() {
    if (notes.length === 0) {
      return <NoItems>You currently have no notes</NoItems>;
    } else {
      return (
        <ul className="flex gap-2 flex-col overflow-y-auto mt-4 pr-4">
          {notes.map((note) => {
            return (
              <li
                key={note.id}
                className="w-full border rounded-lg border-LM-accent-light dark:border-DM-accent-light flex transition-colors duration-200 hover:border-LM-accent-dark dark:hover:border-DM-accent-dark"
              >
                <Link
                  to={`/notes?editing=${note.id}`}
                  className="min-w-full flex p-4 gap-2 justify-between"
                >
                  <div className="text-ellipsis text-nowrap overflow-hidden">
                    {note.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    aria-hidden="true"
                    className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark transition-transform duration-300 min-w-6"
                  >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <Section variant="Notes" title="Your Notes">
      {getRendered()}
    </Section>
  );
}
