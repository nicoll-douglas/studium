import reducer from "./reducer";
import { useReducer } from "react";

export default function useCalculator() {
  const [storage, dispatch] = useReducer(reducer, {
    firstNumber: "",
    running: "",
    operation: "",
  });

  return [storage, dispatch];
}
