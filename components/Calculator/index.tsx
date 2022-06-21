import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import {
  buttonsOptions,
  BTN_ACTIONS,
	buttonOptionType,
} from "./buttonActions";

import { Container, Result, Exp, Buttons } from "./styles";

const Calculator: React.FC = () => {
  const buttonsRef = useRef<HTMLInputElement | any>(null);
  const expRef = useRef<HTMLInputElement | any>(null);

  const [expression, setExpression] = useState<string>("");
	const [darkTheme, setDarkTheme] = useState<Boolean>(false);

  useEffect(() => {
    const calculatorButtons: HTMLButtonElement[] = Array.from(
			buttonsRef!.current.querySelectorAll("button")
    );

    calculatorButtons.forEach(
      (element) => (element.style.height = element.offsetWidth + "px")
    );
  }, []);

  const handleTheme = (item: buttonOptionType) => {
    if (item.action === BTN_ACTIONS.THEME) {
      document.body.classList.toggle("dark");
    }
    setDarkTheme(!darkTheme);
  };

	const btnClick = (item: buttonOptionType) => {
		handleTheme(item);

		const expDiv: HTMLElement | HTMLCollection | null | any = expRef.current;

    if (item.action === BTN_ACTIONS.ADD) {
      addAnimSpan(item.display as string);

      const operator = item.display !== "x" ? item.display : "*";
      setExpression(expression + operator);
    }

    if (item.action === BTN_ACTIONS.DELETE) {
			expDiv!.parentNode.querySelector("div:last-child").innerHTML = "";
      expDiv!.innerHTML = "";

      setExpression("");
    }

    if (item.action === BTN_ACTIONS.CALC) {
      if (expression.trim().length <= 0) return;

      expDiv?.parentNode.querySelector("div:last-child").remove();

      const cloneNode = expDiv?.cloneNode(true);
      expDiv?.parentNode.appendChild(cloneNode);

      const transform = `translateY(${
        -(expDiv?.offsetHeight + 10) + "px"
      }) scale(0.4)`;

      try {
        let res = eval(expression);

        setExpression(res.toString());
        setTimeout(() => {
          cloneNode.style.transform = transform;
          expDiv!.innerHTML = "";
          addAnimSpan((Math.floor(res * 100000000) / 100000000) as any);
        }, 200);
      } catch {
        setTimeout(() => {
          cloneNode.style.transform = transform;
          cloneNode.innerHTML = "Syntax error";
        }, 200);
      } finally {
        console.log("calc complete");
      }
    }
  };

	const addAnimSpan = (content: string) => {
    const expDiv = expRef.current;
    const span = document.createElement("span");

    span.innerHTML = content;
    span.style.opacity = "0";
    expDiv?.appendChild(span);

    const width = span.offsetWidth + "px";
    span.style.width = "0";

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.width = width;
    }, 100);
  };

  return (
    <Container>
      <Result className="calculator__result">
        <Exp ref={expRef} className="calculator__result__exp" />
        <Exp className="calculator__result__exp" />
      </Result>
      <Buttons ref={buttonsRef} className="calculator__btns">
        {buttonsOptions.map((item, index) => (
          <button
            key={index}
            className={item.class}
            onClick={() => btnClick(item)}
          >
            {item.display !== "sun.svg" && item.display}
            {item.display === "sun.svg" && (
              <Image
                src={`/${!darkTheme ? "moon.png" : "sun.png"}`}
                alt={item.display}
                width={16}
                height={16}
              />
            )}
          </button>
        ))}
      </Buttons>
    </Container>
  );
};

export default Calculator;
