import React from 'react'
import ajvar from '../../assets/img/solobolo.webp'
import { Container } from "../../styles/ajvar/Ajvar-styled"


const Ajvar = () => {

    return (
        <Container>
            <p>Sprawdź także:</p>
            <a href="https://www.ajvar.com.pl"><img src={ajvar} alt="ajvar"/></a>
        </Container>
    )
}

export default Ajvar

