import Image from "next/image";
import * as React from "react";
import { buttonOptionType } from "./types";
import { buttonsOptions } from "./data";
import { useCalculator } from "./hooks";

import { Container, Result, Exp, ButtonsContainer } from "./styles";
import {
  CALCULATOR_BUTTONS_TEST_ID,
  CALCULATOR_EXPRESSION_TEST_ID,
  CALCULATOR_RESULT_TEST_ID,
} from "./constants";

const { useRef, useEffect, useCallback } = React;

const Calculator: React.FC = () => {
  const { expressionRef, handleInputAction, darkTheme, expression } =
    useCalculator();

  const buttonsRef = useRef<HTMLInputElement>(null);

  const handleCalculatorButtonsStyle = useCallback(
    () =>
      setTimeout(() => {
        if (!buttonsRef.current) return;

        const calculatorButtons: HTMLButtonElement[] = Array.from(
          buttonsRef.current.querySelectorAll("button")
        );

        calculatorButtons.forEach(
          (element) => (element.style.height = element.offsetWidth + "px")
        );

        buttonsRef.current.style.opacity = "1";
      }, 250),
    [buttonsRef]
  );

  useEffect(() => {
    handleCalculatorButtonsStyle();
  }, [handleCalculatorButtonsStyle]);

  const handleCLickItem = useCallback(
    (item: buttonOptionType) => {
      handleInputAction(item);
    },
    [handleInputAction]
  );

  return (
    <Container>
      <Result className="calculator__result">
        <Exp
          ref={expressionRef}
          data-testid={CALCULATOR_RESULT_TEST_ID}
          role="input"
          className="calculator__result__exp"
          aria-label="Result"
          data-value={expression}
        />

        <Exp
          className="calculator__result__exp"
          data-testid={CALCULATOR_EXPRESSION_TEST_ID}
        />
      </Result>
      <ButtonsContainer
        ref={buttonsRef}
        data-testid={CALCULATOR_BUTTONS_TEST_ID}
        className="calculator__btns"
      >
        {buttonsOptions.map((button, index) => (
          <button
            key={index}
            className={button.class}
            onClick={() => handleCLickItem(button)}
          >
            {button.display !== "sun.svg" && button.display}
            {button.display === "sun.svg" && (
              <Image
                src={`/${!darkTheme ? "moon.png" : "sun.png"}`}
                alt={button.display}
                width={16}
                height={16}
              />
            )}
          </button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default Calculator;
