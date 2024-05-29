import ToDoListPreview from "./components/ToDoListPreview";
import NotesPreview from "./components/NotesPreview";
import BookmarksPreview from "./components/BookmarksPreview";
import TimerPreview from "./components/TimerPreview";

export default function Dashboard() {
  return (
    <div className="px-12 grid grid-cols-2 grid-rows-2 gap-4 w-full lg:grid-cols-1 lg:grid-rows-4 lg:pt-4 sm:px-3 max-w-[1280px] py-auto max-h-fit my-auto">
      <ToDoListPreview />
      <NotesPreview />
      <BookmarksPreview />
      <TimerPreview />
    </div>
  );
}
