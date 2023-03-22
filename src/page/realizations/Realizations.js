import React from "react"
import {
  Container,
  RealizationsContainer,
} from "../../styles/realizations/Realizations-styled"
import RealizationsSlider from "../../components/realizations/RealizationsSlider"

const Realizations = () => {
    return (
        <Container id="realizations">
            <RealizationsContainer>
                <h1>REALIZACJE</h1>
                <RealizationsSlider />
            </RealizationsContainer>
        </Container>
    )
}

export default Realizations