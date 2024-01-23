import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../Redux Store/appStore"
import { BrowserRouter } from "react-router-dom"


test("Should have a logo",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

    const about = screen.getByText("About")
    expect(about).toBeInTheDocument();
})
