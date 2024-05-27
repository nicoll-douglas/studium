import { useEffect, useReducer } from "react";
import reducer from "./reducer";

export default function useCRUD(collectionName) {
  const [database, dispatch] = useReducer(
    reducer,
    collectionName in localStorage
      ? JSON.parse(localStorage[collectionName])
      : []
  );

  useEffect(() => {
    localStorage[collectionName] = JSON.stringify(database);
  }, [database, collectionName]);

  return [database, dispatch];
}
