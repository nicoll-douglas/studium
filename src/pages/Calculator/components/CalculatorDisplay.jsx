import PropTypes from "prop-types";

CalculatorDisplay.propTypes = {
  storage: PropTypes.object.isRequired,
};

export default function CalculatorDisplay({ storage }) {
  return (
    <div
      className="border border-LM-accent-light dark:border-DM-accent-light shadow-inner h-44 rounded-md p-4 text-right flex flex-col justify-end items-end gap-1 flex-grow w-full"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="w-full break-words">{storage.firstNumber}</div>
      <div className="w-full break-words">{storage.operation}</div>
      <div className="w-full break-words">{storage.running}</div>
    </div>
  );
}
