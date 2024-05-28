import { Link } from "react-router-dom";
import Heading from "../../../components/ui/Heading";
import PropTypes from "prop-types";

Section.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default function Section({ variant, title, children }) {
  return (
    <section className="col-span-1 row-span-1 min-w-full max-w-[500px] border border-LM-accent-light dark:border-DM-accent-light rounded-xl lg:h-[300px] min-h-[250px] p-5 relative flex flex-col md:p-3 sm:p-5 xs:p-3 h-[350px] shadow-lg">
      <header className="flex justify-between">
        <Heading variant={variant} title={title} />
        <Link
          className="group -mr-2 flex items-center justify-center"
          aria-label={`Go to ${variant} app`}
          to={`/${variant
            .split(" ")
            .map((word) => word.toLowerCase())
            .join("-")}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            aria-hidden="true"
            className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark transition-transform duration-300"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </Link>
      </header>
      {children}
    </section>
  );
}
