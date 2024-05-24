import PropTypes from "prop-types";

CalculatorDisplay.propTypes = {
  firstRow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  secondRow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  operation: PropTypes.string,
};

export default function CalculatorDisplay({ firstRow, operation, secondRow }) {
  return (
    <div
      className="border border-LM-accent-light dark:border-DM-accent-light shadow-inner h-44 rounded-md p-4 text-right flex flex-col justify-end items-end gap-1 flex-grow w-full"
      aria-live="polite"
    >
      <div className="w-full break-words">{firstRow}</div>
      <div className="w-full break-words">{operation}</div>
      <div className="w-full break-words">{secondRow}</div>
    </div>
  );
}
