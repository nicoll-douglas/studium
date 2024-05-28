import RedirectButton from "./components/RedirectButton";
import CalculatorImage from "./components/CalculatorImage";
import BookImage from "./components/BookImage";
import PageHeading from "./components/PageHeading";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <main className="max-w-[1100px] flex flex-col items-center md:px-6 my-14">
        <PageHeading />
        <p className="text-lg mb-6 text-center lg:text-base sm:max-w-[350px] md:max-w-[420px]">
          Have quick on-hand access to a calculator, note-taking and more!
        </p>
        <div className="grid grid-cols-3 px-16 lg:px-4 w-full md:flex md:flex-col md:items-center md:gap-11 md:mb-10 md:px-0">
          <BookImage />
          <RedirectButton />
          <CalculatorImage />
        </div>
      </main>
    </div>
  );
}
