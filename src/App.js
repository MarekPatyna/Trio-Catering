import React from "react"
import { GlobalStyles } from "./styles/styled/Global"
import Header from "./page/header/Header"
import Home from "./page/home/Home"
import About from "./page/about/About"
import Realizations from "./page/realizations/Realizations"
import Reviews from "./page/reviews/Reviews"
import Contact from "./page/contact/Contact"
import Footer from "./page/footer/Footer"
import Testimonials from "./page/testimonials/Testimonials"
import Ajvar from "./components/ajvar/Ajvar"

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Ajvar />
            <Home />
            <About />
            <Realizations />
            <Reviews />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
