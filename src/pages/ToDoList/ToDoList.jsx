import { useImmer } from "use-immer";
import Heading from "../../components/Heading";
import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";
import { useEffect } from "react";
import NoItems from "./components/NoItems";

export default function ToDoList() {
  const [list, setList] = useImmer(() => {
    const storedList = localStorage.toDoList;
    return storedList ? JSON.parse(storedList) : [];
  });
  useEffect(() => {
    localStorage.toDoList = JSON.stringify(list);
  }, [list]);

  function handleNewItem(data) {
    setList((currentList) => {
      return [
        ...currentList,
        {
          text: data,
          id: crypto.randomUUID(),
        },
      ];
    });
  }

  function handleEdit(text, id) {
    setList((currentList) => {
      return currentList.map((listElement) => {
        return listElement.id === id
          ? { ...listElement, text: text }
          : listElement;
      });
    });
  }

  function handleDelete(id) {
    setList((currentList) => {
      return currentList.filter((listElement) => listElement.id !== id);
    });
  }

  let rendered;
  if (list.length === 0) {
    rendered = <NoItems />;
  } else {
    rendered = list.map((listElement) => {
      return (
        <ListItem
          content={listElement.text}
          key={listElement.id}
          id={listElement.id}
          editCallback={handleEdit}
          deleteCallback={handleDelete}
        />
      );
    });
  }

  return (
    <div className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      <Heading variant="To Do List" />
      <ListInput callback={handleNewItem} />
      <ul
        className="border border-LM-accent-light dark:border-DM-accent-light py-4 rounded-xl shadow-lg max-w-full flex-col"
        id="to-do-list-items"
        aria-label="To do list"
      >
        {rendered}
      </ul>
    </div>
  );
}
