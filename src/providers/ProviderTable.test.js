import React from "react";
import { render } from "@testing-library/react";
import ProviderTable from "./ProviderTable";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
  render(<MemoryRouter><ProviderTable /></MemoryRouter>);
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <ProviderTable />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});