import mapToIcon from "../../utils/iconMap";

export default function Heading({ variant }) {
  const SVGComponent = mapToIcon(variant);
  return (
    <h1 className="flex gap-2 text-lg items-center text-LM-accent-light dark:text-DM-accent-light">
      <SVGComponent className="fill-LM-accent-light dark:fill-DM-accent-light" />
      {variant}
    </h1>
  );
}
