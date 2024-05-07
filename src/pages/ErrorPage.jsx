import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Header hasNav={false} />
      <div className="flex-grow flex items-center flex-col justify-center py-16">
        <h1 className="text-9xl flex gap-2 items-center">404</h1>
        <p className="text-3xl mb-5">Page not found</p>
        <Link
          to="/"
          className="py-3 px-8 font-semibold rounded-xl bg-LM-accent-light text-white dark:text-black text-lg flex gap-2 items-center hover:bg-LM-accent-dark dark:bg-DM-accent-light dark:hover:bg-DM-accent-dark transition-colors duration-200 group max-h-fit self-start mx-auto lg:text-base lg:px-6 md:px-4 hover:text-white dark:hover:text-black"
        >
          Go to home page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            aria-hidden="true"
            className="fill-white dark:fill-black group-hover:translate-x-1 transition-transform duration-200"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </Link>
      </div>
    </>
  );
}
