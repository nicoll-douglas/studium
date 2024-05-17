import { arrayMove } from "@dnd-kit/sortable";

export default function reorderList(e, list, setter) {
  const { active, over } = e;
  if (active.id === over.id) return;
  const originalPos = list.findIndex((note) => note.id === active.id);
  const newPos = list.findIndex((note) => note.id === over.id);
  setter(arrayMove(list, originalPos, newPos));
}
