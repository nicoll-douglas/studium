import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import NumberButton from "./components/buttons/NumberButton";
import OperatorButton from "./components/buttons/OperatorButton";
import CalculatorDisplay from "./components/CalculatorDisplay";
import "./Calculator.css";

import { createContext, useState } from "react";

export const StorageContext = createContext();

export default function Calculator() {
  const [storage, setStorage] = useState({
    firstNumber: "",
    operatorFunction: undefined,
    running: "",
    operation: "",
  });

  function handleSignChange() {
    setStorage({
      ...storage,
      running:
        storage.running.charAt(0) === "-"
          ? storage.running.slice(1)
          : `-${storage.running}`,
    });
  }

  function handleEquals() {
    if (!storage.running) return;
    if (storage.operatorFunction) {
      setStorage({
        running: `${storage.operatorFunction(
          +storage.firstNumber,
          +storage.running
        )}`,
        firstNumber: "",
        operation: "",
        operatorFunction: null,
      });
    }
  }

  function handleAllClear() {
    setStorage({
      firstNumber: "",
      operatorFunction: null,
      running: "",
      operator: "",
    });
  }

  function handleDecimal() {
    if (!storage.running.includes(".")) {
      setStorage({
        ...storage,
        running: `${storage.running}.`,
      });
    }
  }

  return (
    <Container>
      <div className="gap-4 flex flex-col mx-auto">
        <Heading variant="Calculator" />
        <div
          className="border rounded-2xl shadow-md p-4 flex flex-col gap-4 xs:gap-3 xs:p-3 border-LM-accent-light dark:border-DM-accent-light max-w-fit"
          id="calculator"
        >
          <StorageContext.Provider value={[storage, setStorage]}>
            <CalculatorDisplay
              firstRow={storage.firstNumber}
              operation={storage.operation}
              secondRow={storage.running}
            />
            <div
              className="grid grid-cols-4 gap-3 grid-rows-5 w-full xs:gap-2"
              aria-label="calculator buttons"
            >
              <button onClick={handleAllClear}>AC</button>
              <button onClick={handleSignChange}>+/-</button>
              <OperatorButton operation="%" />
              <OperatorButton operation={"\u00F7"} />
              <NumberButton number={7} />
              <NumberButton number={8} />
              <NumberButton number={9} />
              <OperatorButton operation={"\u00D7"} />
              <NumberButton number={4} />
              <NumberButton number={5} />
              <NumberButton number={6} />
              <OperatorButton operation={"\u2212"} />
              <NumberButton number={1} />
              <NumberButton number={2} />
              <NumberButton number={3} />
              <OperatorButton operation="+" />
              <NumberButton number={0} />
              <button onClick={handleDecimal}>.</button>
              <button onClick={handleEquals}>=</button>
            </div>
          </StorageContext.Provider>
        </div>
      </div>
    </Container>
  );
}
