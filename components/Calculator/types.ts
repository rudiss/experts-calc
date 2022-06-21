import { Dispatch, SetStateAction } from "react";

export enum BTN_ACTIONS {
  ADD = "ADD",
  THEME = "THEME",
  CALC = "CALC",
  DELETE = "DELETE",
}

export type buttonOptionType = {
  display: string | number;
  action: BTN_ACTIONS;
  class: string;
};

export interface IOperationActionProps {
  item: buttonOptionType;
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  expElement: HTMLDivElement;
  resultElement: HTMLDivElement;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}
