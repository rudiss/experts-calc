import { selectActionItemByInputClick } from "./helpers";
import { useRef, useState } from "react";
import { buttonOptionType } from "./types";

export const useCalculator = () => {
  const expressionRef = useRef<HTMLInputElement>(null);
  const [expression, setExpression] = useState<string>("");
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const handleInputAction = (item: buttonOptionType) => {
    const expElement = expressionRef.current as HTMLDivElement;
    const resultElement =
      expElement.parentNode &&
      (expElement.parentNode.querySelector("div:last-child") as HTMLDivElement);

    if (!expElement || !resultElement) return;

    selectActionItemByInputClick({
      item,
      expElement,
      resultElement,
      setExpression,
      expression,
      setDarkTheme,
    });
  };

  return {
    darkTheme,
    expressionRef,
    handleInputAction,
  };
};
