import actions from "./actions";
import Decimal from "decimal.js";

export default function reducer(storage, action) {
  const maxLength = storage.running.length > 25;
  switch (action.type) {
    case actions.signChange: {
      if (maxLength) return storage;
      return {
        ...storage,
        running:
          storage.running.charAt(0) === "-"
            ? storage.running.slice(1)
            : `-${storage.running}`,
      };
    }

    case actions.operate: {
      if (!storage.running || !storage.operation) return storage;

      let operation = (n1, n2) => {
        switch (storage.operation) {
          case "+":
            return new Decimal(n1).plus(new Decimal(n2));
          case "%":
            return new Decimal(n1).mod(new Decimal(n2));
          case "\u2212":
            return new Decimal(n1).minus(new Decimal(n2));
          case "\u00D7":
            return new Decimal(n1).times(new Decimal(n2));
          case "\u00F7":
            return new Decimal(n1).div(new Decimal(n2));
          default:
            throw new Error("storage.operation contains invalid operation");
        }
      };

      return {
        running: `${operation(+storage.firstNumber, +storage.running)}`,
        firstNumber: "",
        operation: "",
      };
    }

    case actions.clear: {
      return {
        firstNumber: "",
        running: "",
        operation: "",
      };
    }

    case actions.inputDecimal: {
      if (maxLength) return storage;
      if (storage.running.includes(".")) return storage;
      return {
        ...storage,
        running: `${storage.running}.`,
      };
    }

    case actions.inputNumber: {
      if (maxLength) return storage;

      const number = action.payload.number;
      if (+number === 0 && storage.running === "0") return storage;
      return {
        ...storage,
        running: `${storage.running === "0" ? "" : storage.running}${number}`,
      };
    }

    case actions.inputOperator: {
      const newStorage = {
        ...storage,
        operation: action.payload.operation,
      };

      if (storage.firstNumber) return newStorage;

      if (storage.running) {
        newStorage.firstNumber = storage.running;
        newStorage.running = "";
      } else {
        newStorage.firstNumber = "0";
      }

      return newStorage;
    }

    default:
      return storage;
  }
}
