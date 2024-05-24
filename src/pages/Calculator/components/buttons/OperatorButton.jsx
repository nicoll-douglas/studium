import PropTypes from "prop-types";
import { useContext } from "react";
import { StorageContext } from "../../Calculator";

OperatorButton.propTypes = {
  operation: PropTypes.string.isRequired,
};

export default function OperatorButton({ operation }) {
  const [storage, setStorage] = useContext(StorageContext);

  function getOperatorFunction() {
    return (n1, n2) => {
      switch (operation) {
        case "+":
          return n1 + n2;
        case "%":
          return n1 % n2;
        case "\u00F7":
          return n1 / n2;
        case "\u00D7":
          return n1 * n2;
        case "\u2212":
          return n1 - n2;
      }
    };
  }

  function setOperator() {
    const newStorage = {
      ...storage,
      operation,
      operatorFunction: getOperatorFunction(),
    };

    if (!storage.firstNumber) {
      if (storage.running) {
        newStorage.firstNumber = storage.running;
        newStorage.running = "";
      } else {
        newStorage.firstNumber = "0";
      }
    }

    setStorage(newStorage);
  }

  return <button onClick={setOperator}>{operation}</button>;
}
