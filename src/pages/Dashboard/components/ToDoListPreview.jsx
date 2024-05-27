import Section from "./Section";
import useCRUD from "../../../hooks/useCRUD/useCRUD";
import CompleteButton from "../../ToDoList/components/CompleteButton";
import NoItems from "../../../components/ui/NoItems";

export default function ToDolistPreview() {
  const [list, dispatch] = useCRUD("toDoList");

  function getRendered() {
    if (list.length === 0) {
      return <NoItems>You currently have no to-dos</NoItems>;
    } else {
      return (
        <ul className="mt-4 flex flex-col gap-2 overflow-y-auto">
          {list.map((listElement) => {
            return (
              <li className="flex gap-2" key={listElement.id}>
                <CompleteButton payload={listElement} dispatch={dispatch} />
                {listElement.text}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <Section variant="To Do List" title="Your To Do's">
      {getRendered()}
    </Section>
  );
}
