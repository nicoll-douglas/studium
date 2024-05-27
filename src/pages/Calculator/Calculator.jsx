import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";
import CalculatorDisplay from "./components/CalculatorDisplay";
import "./Calculator.css";
import useCalculator from "../../hooks/useCalculator/useCalculator";
import actions from "../../hooks/useCalculator/actions";

import { createContext } from "react";

export const StorageContext = createContext();

export default function Calculator() {
  const [storage, dispatch] = useCalculator();

  return (
    <Container>
      <div className="gap-4 flex flex-col mx-auto">
        <Heading variant="Calculator" />
        <div
          className="border rounded-2xl shadow-md p-4 flex flex-col gap-4 xs:gap-3 xs:p-3 border-LM-accent-light dark:border-DM-accent-light max-w-fit"
          id="calculator"
        >
          <StorageContext.Provider value={[storage, dispatch]}>
            <CalculatorDisplay storage={storage} />
            <div
              className="grid grid-cols-4 gap-3 grid-rows-5 w-full xs:gap-2"
              aria-label="calculator buttons"
            >
              <button onClick={() => dispatch({ type: actions.clear })}>
                AC
              </button>
              <button onClick={() => dispatch({ type: actions.signChange })}>
                +/-
              </button>
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
              <button onClick={() => dispatch({ type: actions.inputDecimal })}>
                .
              </button>
              <button onClick={() => dispatch({ type: actions.operate })}>
                =
              </button>
            </div>
          </StorageContext.Provider>
        </div>
      </div>
    </Container>
  );
}
