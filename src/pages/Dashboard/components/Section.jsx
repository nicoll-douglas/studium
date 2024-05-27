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
    <section className="col-span-1 row-span-1 min-w-full max-w-[500px] border border-LM-accent-light dark:border-DM-accent-light rounded-xl lg:h-[300px] min-h-[250px] p-6 relative flex flex-col md:p-4 sm:p-6 xs:p-4 max-h-[375px] shadow-lg">
      <div className="flex justify-between">
        <Heading variant={variant} title={title} />
        <Link
          className="group -mr-2 flex items-center justify-center"
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
      </div>
      {children}
    </section>
  );
}
