// Jest and RTL
import React from 'react';
import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import Header from './Header';


afterEach(cleanup);

describe("Header", () => {

  // DOM Testing - Sell now button changes to Buy now onclick
  it('Sell now changes the text after click', () => {
    const { queryByText, getByText } = render(
      <Header />,
    );

    // test if button clicked changes text
    expect(queryByText(/sell now!/i)).toBeTruthy();
    fireEvent.click(getByText(/sell now!/i));
    expect(queryByText(/buy now!/i)).toBeTruthy();
  });

  // Text appearance test to see if the placeholder text is well displayed
  it('Displays the placeholder well', () => {
    render(<Header />);
    const placeholderText = screen.getByPlaceholderText(/What do you want to buy?/i);
    expect(placeholderText).toBeInTheDocument();
  });

});

