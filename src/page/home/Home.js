import React from "react"
import { Container, HomeContainer } from "../../styles/home/Home-styled"

const Home = () => {
    return (
        <Container id="home">
            <HomeContainer>
                <h1>ZAMÓW TERAZ!</h1>
                <div>
                    <p>• catering</p>
                    <p>• imprezy okolicznościowe</p>
                    <p>• catering dla złobków i przedszkoli</p>
                </div>
            </HomeContainer>
        </Container>
    )
}

export default Home