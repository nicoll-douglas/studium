import PropTypes from "prop-types";
import { useContext } from "react";
import { StorageContext } from "../Calculator";
import actions from "../../../hooks/useCalculator/actions";

OperatorButton.propTypes = {
  operation: PropTypes.string.isRequired,
};

export default function OperatorButton({ operation }) {
  const [, dispatch] = useContext(StorageContext);

  function handleClick() {
    dispatch({ type: actions.inputOperator, payload: { operation } });
  }

  return <button onClick={handleClick}>{operation}</button>;
}
