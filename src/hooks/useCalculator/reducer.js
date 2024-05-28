import actions from "./actions";

const maxInput = 25;

export default function reducer(storage, action) {
  switch (action.type) {
    case actions.signChange: {
      if (storage.running.length > 25) return storage;
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

      let operation;
      switch (storage.operation) {
        case "+":
          operation = (n1, n2) => n1 + n2;
          break;
        case "%":
          operation = (n1, n2) => n1 % n2;
          break;
        case "\u2212":
          operation = (n1, n2) => n1 - n2;
          break;
        case "\u00D7":
          operation = (n1, n2) => n1 * n2;
          break;
        default:
          operation = (n1, n2) => n1 / n2;
      }

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
      if (storage.running.length > 25) return storage;
      if (storage.running.includes(".")) return storage;
      return {
        ...storage,
        running: `${storage.running}.`,
      };
    }

    case actions.inputNumber: {
      if (storage.running.length > 25) return storage;

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
