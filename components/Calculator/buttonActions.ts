type BTN_ACTIONS = {
    ADD: "ADD" | string,
    THEME: "THEME" | string,
    CALC: "CALC" | string,
    DELETE: "DELETE" | string,
  };

  export const BTN_ACTIONS: BTN_ACTIONS = {
    ADD: "ADD",
    THEME: "THEME",
    CALC: "CALC",
    DELETE: "DELETE",
  };

  export type buttonOptionType = {
    display: string | number,
    action: typeof BTN_ACTIONS | string,
    class: string,
  };

  export type buttonsOptionsTypes = buttonOptionType[];

  export const buttonsOptions: buttonsOptionsTypes = [
    {
      display: "C",
      action: BTN_ACTIONS.DELETE,
      class: "btn-operator",
    },
    {
      display: "(",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: ")",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: "/",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: "7",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "8",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "9",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "x",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: "4",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "5",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "6",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "-",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: "1",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "2",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "3",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "+",
      action: BTN_ACTIONS.ADD,
      class: "btn-operator",
    },
    {
      display: "sun.svg",
      action: BTN_ACTIONS.THEME,
      class: "",
    },
    {
      display: "0",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: ".",
      action: BTN_ACTIONS.ADD,
      class: "",
    },
    {
      display: "=",
      action: BTN_ACTIONS.CALC,
      class: "btn-operator",
    },
  ];
