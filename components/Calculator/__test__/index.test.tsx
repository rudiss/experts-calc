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

  it("should render the calculator and sum value", () => {
    render(<Calculator />);

    const buttonOne = screen.getByText(/1/);
    fireEvent.click(buttonOne);

    const buttonZero = screen.getByText(/0/g);
    fireEvent.click(buttonZero);

    const result = screen.getByTestId(CALCULATOR_RESULT_TEST_ID).textContent;

    expect(result).toEqual("10");
  });


  it("should render the calculator and clear value", () => {
    render(<Calculator />);

    const buttonOne = screen.getByText(/1/);
    fireEvent.click(buttonOne);

    const buttonZero = screen.getByText(/0/g);
    fireEvent.click(buttonZero);


    const buttonClean = screen.getByText(/C/g);
    fireEvent.click(buttonClean);

    const result = screen.getByTestId(CALCULATOR_RESULT_TEST_ID).textContent;

    expect(result).toEqual("");
  });
});
