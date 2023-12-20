import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "../app/page";

test("initial test", () => {
  render(<Page />);

  const header = screen.getByRole("heading", {
    name: /Styled with Styled Components/i,
  });

  expect(header).toBeInTheDocument();
});
