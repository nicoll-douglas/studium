import { useEffect } from "react";
import { useImmer } from "use-immer";

export default function useCRUD(collectionName) {
  const [database, setDatabase] = useImmer(() => {
    const storedData = localStorage[collectionName];
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage[collectionName] = JSON.stringify(database);
  }, [database, collectionName]);

  const operations = {
    update(id, fields) {
      setDatabase(
        database.map((item) => {
          return item.id === id ? { ...item, ...fields } : item;
        })
      );
    },
    remove(id) {
      setDatabase(database.filter((item) => item.id !== id));
    },
    create(fields) {
      setDatabase([
        ...database,
        {
          id: crypto.randomUUID(),
          ...fields,
        },
      ]);
    },
  };

  return [database, setDatabase, operations];
}
