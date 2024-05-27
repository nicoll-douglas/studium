import { arrayMove } from "@dnd-kit/sortable";
import actions from "./actions";

export default function reducer(database, action) {
  switch (action.type) {
    case actions.create: {
      return [...database, { ...action.payload, id: crypto.randomUUID() }];
    }
    case actions.update: {
      const { id, ...fields } = action.payload;
      return database.map((item) => {
        return item.id === id ? { ...item, ...fields } : item;
      });
    }
    case actions.delete: {
      const { id } = action.payload;
      return database.filter((item) => item.id !== id);
    }
    case actions.swap: {
      const { active, over } = action.payload;
      if (active.id === over.id) return database;
      const originalPos = database.findIndex((item) => item.id === active.id);
      const newPos = database.findIndex((item) => item.id === over.id);
      return arrayMove(database, originalPos, newPos);
    }
    default:
      return database;
  }
}
