import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Calculator from "..";
import { CALCULATOR_RESULT_TEST_ID } from "../constants";

describe("<Calculator>", () => {
  it("should render the calculator", () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it.each([
    [
      "subtract",
      {
        items: [
          { value: "5" },
          { value: "2" },
          { value: "-" },
          { value: "1" },
          { value: "0" },
          { value: "=" },
        ],
        result: "42",
      },
    ],
    [
      "sum",
      {
        items: [
          { value: "1" },
          { value: "0" },
          { value: "+" },
          { value: "5" },
          { value: "2" },
          { value: "=" },
        ],
        result: "62",
      },
    ],
    [
      "multiply",
      {
        items: [
          { value: "1" },
          { value: "0" },
          { value: "x" },
          { value: "5" },
          { value: "=" },
        ],
        result: "50",
      },
    ],
  ])("should and %s value", async (...numbers) => {
    render(<Calculator />);
    const data = numbers[1];
    data.items.forEach((item) => {
      fireEvent.click(screen.getByText(item.value));
    });

    await waitFor(() => {
      const result = screen.getAllByTestId(CALCULATOR_RESULT_TEST_ID)[0]
        .textContent;
      expect(result).toEqual(data.result);
    });
  });

  it("should render the calculator and return a feedback error when is not a number", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText(")"));
    fireEvent.click(screen.getByText("0"));

    fireEvent.click(screen.getByText(/=/g));

    const result = screen.getAllByTestId(CALCULATOR_RESULT_TEST_ID)[1]
      .textContent;

    expect(result).toBeTruthy();
  });

  it("should show calculator buttons when style transition end", async () => {
    const { container } = render(<Calculator />);

    const calcButtons: any = container.querySelector(".calculator__btns");

    await waitFor(() => {
      expect(calcButtons?.style.opacity).toStrictEqual("1");
    });
  });

  it("should render the calculator and clear value", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText(/1/));

    fireEvent.click(screen.getByText(/0/g));

    fireEvent.click(screen.getByText(/C/g));

    const result = screen.getByTestId(CALCULATOR_RESULT_TEST_ID).textContent;

    expect(result).toEqual("");
  });
});
