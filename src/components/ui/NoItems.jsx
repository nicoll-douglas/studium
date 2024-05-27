import PropTypes from "prop-types";

NoItems.propTypes = {
  children: PropTypes.node,
};

export default function NoItems({ children }) {
  return (
    <div className="text-center px-4 py-1 w-full h-full flex flex-grow items-center justify-center">
      {children}
    </div>
  );
}
