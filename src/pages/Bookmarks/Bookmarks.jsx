import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import AddButton from "../../components/ui/buttons/AddButton";

export default function Bookmarks() {
  return (
    <Container>
      <Heading variant="Bookmarks" />
      <div className="bg-LM-primary dark:bg-DM-primary border border-LM-accent-light dark:border-DM-accent-light shadow-lg rounded-xl flex gap-4 items-start space-between max-w-full relative">
        <div className="p-4 pr-14 rounded-xl flex-grow flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent w-full"
          />
          <input
            className="bg-transparent w-full"
            placeholder="URL"
            type="text"
          />
        </div>
        <AddButton label="add note" />
      </div>
    </Container>
  );
}
