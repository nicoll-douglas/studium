import PropTypes from "prop-types";
import { useContext } from "react";
import { StorageContext } from "../Calculator";

OperatorButton.propTypes = {
  operation: PropTypes.string.isRequired,
};

export default function OperatorButton({ operation }) {
  const [, dispatch] = useContext(StorageContext);

  function handleClick() {
    dispatch({ type: "inputOperator", payload: { operation } });
  }

  return <button onClick={handleClick}>{operation}</button>;
}
