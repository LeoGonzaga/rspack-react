import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const LABEL = "Clique aqui";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<Button>{LABEL}</Button>);

    const buttonLabel = screen.getByText(LABEL);
    expect(buttonLabel).toBeInTheDocument();
  });
});
