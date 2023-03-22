import React from 'react'
import {Container, FooterContainer} from "../../styles/footer/Footer-styled"

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <p>
                    Copyright ©&nbsp;
                    {new Date().getFullYear()}&nbsp;Trio
                    Catering | Wszelkie prawa zastrzeżone | Projekt oraz realizacja strony &nbsp;
                    <a href="https://www.marekpatyna.pl">marekpatyna.pl</a>
                </p>
            </FooterContainer>
        </Container>
    )
}

export default Footer