import { NavLink } from "react-router-dom";
import mapToIcon from "../../utils/iconMap";

export default function MenuItem({ variant, role }) {
  const SVGComponent = mapToIcon(variant);

  return (
    <li role={role}>
      <NavLink
        className="group flex gap-2 items-center w-full py-4 cursor-pointer"
        to={`/${variant
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("-")}`}
      >
        <SVGComponent className="group-hover:fill-LM-accent-light dark:group-hover:fill-DM-accent-light" />
        {variant}
      </NavLink>
    </li>
  );
}
