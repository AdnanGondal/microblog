import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import "@testing-library/jest-dom/extend-expect";
// EXAMPLE TEST
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  test("renders app component", () => {
    render(<App />);

    //screen.debug();
  });
});

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);

    //screen.debug();
  });

  test("header contains login button", () => {
    render(<Header />);
    const logInButton = screen.queryByText("Log In");
    screen.debug();
    expect(logInButton).toBeInTheDocument();
  });
});

describe("Blog", () => {
  test("renders Blog component", () => {
    render(<Blog />);

    screen.debug();
  });

  test("contains at least one article", () => {
    render(<Blog />);

    //screen.debug();
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
