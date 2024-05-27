import PropTypes from "prop-types";

Container.propTypes = {
  children: PropTypes.node,
};

export default function Container({ children }) {
  return (
    <div className="flex flex-col mt-16 gap-4 w-[500px] lg:w-[390px] sm:w-full">
      {children}
    </div>
  );
}
