import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", () => {
  it("should render name", () => {
    const name = /Victor Feliciano/i

    render(<Footer />)

    expect(screen.getByText(name)).toBeInTheDocument()
  })
  it("should render current year", () => {
    const year = new RegExp(String(new Date().getFullYear()))

    render(<Footer />)

    expect(screen.getByText(year)).toBeInTheDocument()
  })
})