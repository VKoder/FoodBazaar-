import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("Should load Contact Component", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})

it("Should include button in Contact Component", ()=>{
    render(<Contact/>)

    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
})

