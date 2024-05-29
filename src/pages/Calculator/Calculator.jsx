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
          className="border rounded-2xl p-4 flex flex-col gap-4 xs:gap-3 xs:p-3 border-LM-accent-light dark:border-DM-accent-light max-w-fit"
          id="calculator"
        >
          <StorageContext.Provider value={[storage, dispatch]}>
            <CalculatorDisplay storage={storage} />
            <ul
              className="grid grid-cols-4 gap-3 grid-rows-5 w-full xs:gap-2"
              aria-label="calculator buttons"
            >
              <li>
                <button onClick={() => dispatch({ type: actions.clear })}>
                  AC
                </button>
              </li>
              <li>
                <button onClick={() => dispatch({ type: actions.signChange })}>
                  +/-
                </button>
              </li>
              <li>
                <OperatorButton operation="%" />
              </li>
              <li>
                <OperatorButton operation={"\u00F7"} />
              </li>
              <li>
                <NumberButton number={7} />
              </li>
              <li>
                <NumberButton number={8} />
              </li>
              <li>
                <NumberButton number={9} />
              </li>
              <li>
                <OperatorButton operation={"\u00D7"} />
              </li>
              <li>
                <NumberButton number={4} />
              </li>
              <li>
                <NumberButton number={5} />
              </li>
              <li>
                <NumberButton number={6} />
              </li>
              <li>
                <OperatorButton operation={"\u2212"} />
              </li>
              <li>
                <NumberButton number={1} />
              </li>
              <li>
                <NumberButton number={2} />
              </li>
              <li>
                <NumberButton number={3} />
              </li>
              <li>
                <OperatorButton operation="+" />
              </li>
              <li className="col-span-2">
                <NumberButton number={0} />
              </li>
              <li>
                <button
                  onClick={() => dispatch({ type: actions.inputDecimal })}
                >
                  .
                </button>
              </li>
              <li>
                <button onClick={() => dispatch({ type: actions.operate })}>
                  =
                </button>
              </li>
            </ul>
          </StorageContext.Provider>
        </div>
      </div>
    </Container>
  );
}
