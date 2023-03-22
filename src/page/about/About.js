import React from "react"
import {
  AboutContainer,
  AboutInfo,
  AboutPhoto,
  ContactButton,
  Container,
} from "../../styles/about/About-styled"
import service from '../../assets/img/service.webp'
import { Link as LinkScroll } from "react-scroll"

const About = () => {

    return (
        <Container id="about">
            <AboutContainer>
                <AboutInfo>
                    <h1>KIM JESTEŚMY?</h1>
                    <p>
                        <span>Firma TrioCatering</span> specjalizuje się w przygotowywaniu wysokiej jakości cateringu na różnego rodzaju
                        imprezy, takie jak wesela, chrzciny, urodziny, czy konferencje. Oferujemy również usługi cateringowe
                        dla firm oraz placówek oświatowych, takich jak przedszkola i żłobki. Nasze menu jest zróżnicowane
                        i dostosowywane do indywidualnych potrzeb klientów, a każde danie jest przygotowywane z najświeższych
                        składników. Dostarczamy potrawy na czas i zawsze staramy się sprostać oczekiwaniom naszych klientów.<br />
                        <span>Zaufaj nam i pozwól nam zatroszczyć się o Twoje kulinarne potrzeby!</span>
                    </p>
                    <LinkScroll to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                        <ContactButton>KONTAKT</ContactButton>
                    </LinkScroll>
                </AboutInfo>
                <AboutPhoto>
                    <img src={service} alt="service" />
                </AboutPhoto>
            </AboutContainer>
        </Container>
    )
}

export default About




