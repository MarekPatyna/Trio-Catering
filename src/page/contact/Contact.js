import React, { useEffect, useState } from "react"
import {
  Alert,
  BusinessCard,
  CardBg,
  ContactContainer,
  Container,
  EmailIcon,
  FbIcon,
  FlexCon,
  MapIcon,
  PhoneIcon,
} from "../../styles/contact/Contact-styled"
import EmailJs from "../../components/contact/EmailJs"

const Contact = () => {

    const [status, setStatus] = useState(false)
    const [validationAlert, setValidationAlert] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false)
            setValidationAlert(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [status, validationAlert])

    return (
        <Container id="contact">
            <ContactContainer>
                <h1>KONTAKT</h1>
                <FlexCon>
                    <BusinessCard>
                        <CardBg>
                            <p>
                                Godziny otwarcia<br />
                                8:00 do 15:00 (Pon-Pt)
                            </p>
                            <ul>
                                <li><PhoneIcon />517 463 119</li>
                                <li><EmailIcon />kontakt@trio-catering.pl</li>
                                <li><MapIcon /><a href="https://www.google.com/maps/place/51.04430805411535,17.061615220239982">św. Jacka 177, Wroclaw, Polska</a></li>
                                <li><FbIcon /><a href="https://www.facebook.com/triocateringwroclaw">fb/triocateringwroclaw</a></li>
                            </ul>
                        </CardBg>
                    </BusinessCard>
                    <EmailJs
                        validationAlert={validationAlert}
                        setValidationAlert={setValidationAlert}
                        setStatus={setStatus}
                    />
                    {status && <Alert>Wiadomość wysłana!</Alert>}
                    {validationAlert && <Alert validationAlert={validationAlert}>Proszę wypełnić wszystkie wymagane pola!</Alert>}
                </FlexCon>
            </ContactContainer>
        </Container>
    )
}

export default Contact