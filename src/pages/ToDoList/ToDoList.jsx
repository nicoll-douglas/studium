import Heading from "../../components/Heading";

export default function ToDoList() {
  return (
    <div className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      <Heading variant="To Do List" />
      <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-center space-between max-w-full relative">
        <input
          type="text"
          className="bg-transparent p-4 pr-14 rounded-xl flex-grow"
          placeholder="Add a to do..."
          autoComplete="off"
        />
        <button
          className="absolute right-0 mx-4 group"
          aria-label="add item to list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            aria-hidden="true"
            className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
      <ul
        className="gap-2 border border-LM-accent-light dark:border-DM-accent-light p-4 rounded-xl shadow-lg max-w-full flex-col"
        id="to-do-list-items"
        aria-label="To do list"
      >
        <li></li>
      </ul>
    </div>
  );
}
