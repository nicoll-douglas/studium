import mapToIcon from "../../utils/iconMap";
import PropTypes from "prop-types";

Heading.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default function Heading({ variant, title }) {
  const SVGComponent = mapToIcon(variant);

  return (
    <h1 className="flex gap-2 text-lg items-center text-LM-accent-light dark:text-DM-accent-light">
      <SVGComponent className="fill-LM-accent-light dark:fill-DM-accent-light" />
      {title ? title : variant}
    </h1>
  );
}
