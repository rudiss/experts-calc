import { IOperationActionProps, BTN_ACTIONS } from "./types";

const handleAddAnimationSpan = (content: string, expression: any) => {
  const span = document.createElement("span");

  span.innerHTML = content;
  span.style.opacity = "0";
  expression?.appendChild(span);

  const width = span.offsetWidth + "px";
  span.style.width = "0";

  setTimeout(() => {
    span.style.opacity = "1";
    span.style.width = width;
  }, 100);
};

const setActionAdd = ({
  item,
  expression,
  expElement,
  setExpression,
}: IOperationActionProps) => {
  handleAddAnimationSpan(String(item.display), expElement);

  console.log(expression);
  const operator = item.display !== "x" ? item.display : "*";
  setExpression(expression + operator);
};

const setActionDelete = ({
  resultElement,
  expElement,
  setExpression,
}: IOperationActionProps) => {
  resultElement.innerHTML = "";
  expElement.innerHTML = "";

  setExpression("");
};

const setActionCalc = ({
  setExpression,
  expression,
  expElement,
  resultElement,
}: IOperationActionProps) => {
  if (expression.trim().length <= 0 || !expElement.parentNode) return;

  resultElement.remove();

  const cloneNode = expElement.cloneNode(true) as HTMLDivElement;
  expElement.parentNode.appendChild(cloneNode);

  const transform = `translateY(${
    -(expElement?.offsetHeight + 10) + "px"
  }) scale(0.4)`;

  try {
    let res = eval(expression);

    setExpression(String(res));
    setTimeout(() => {
      cloneNode.style.transform = transform;
      expElement.innerHTML = "";

      const calcAnimationSpan = String(Math.floor(res * 100000000) / 100000000);
      handleAddAnimationSpan(calcAnimationSpan, expElement);
    }, 200);
  } catch {
    setTimeout(() => {
      cloneNode.style.transform = transform;
      cloneNode.innerHTML = "Not a number";
    }, 200);
  } finally {
    console.log("calc complete");
  }
};

const setActionTheme = ({ setDarkTheme }: IOperationActionProps) => {
  document.body.classList.toggle("dark");
  setDarkTheme((prevValue) => !prevValue);
};

export const selectActionItemByInputClick = (props: IOperationActionProps) =>
  ({
    [BTN_ACTIONS.ADD]: () => setActionAdd(props),
    [BTN_ACTIONS.DELETE]: () => setActionDelete(props),
    [BTN_ACTIONS.CALC]: () => setActionCalc(props),
    [BTN_ACTIONS.THEME]: () => setActionTheme(props),
  }[props.item.action]());
