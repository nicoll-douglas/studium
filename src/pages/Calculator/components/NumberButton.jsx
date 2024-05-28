import PropTypes from "prop-types";
import { useContext } from "react";

import { StorageContext } from "../Calculator";
import actions from "../../../hooks/useCalculator/actions";

NumberButton.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default function NumberButton({ number }) {
  const [, dispatch] = useContext(StorageContext);

  function handleClick() {
    dispatch({ type: actions.inputNumber, payload: { number } });
  }

  return <button onClick={handleClick}>{number}</button>;
}
