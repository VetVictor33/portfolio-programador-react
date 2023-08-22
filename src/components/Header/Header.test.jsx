import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./Header";

const renderComponent = () => {
  const router = createBrowserRouter([
    {
      element: <Header />,
      path: '/'
    }
  ]);

  render(<RouterProvider router={router} />)
}


describe("Render Header", () => {
  it("should render correctly", () => {
    renderComponent()

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/sobre/i)).toBeInTheDocument()
    expect(screen.getByText(/contato/i)).toBeInTheDocument()
  })

  it.each([[/home/i, '/'], [/sobre/i, '/about'], [/contato/i, '/contact']])('testings %s href', (text, path) => {
    renderComponent()
    const link = screen.getByTestId(text);

    expect(link.getAttribute('href')).toBe(path);
  })
})