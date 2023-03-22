import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { EmailJsContainer, SendBtn } from "../../styles/contact/Contact-styled"

const EmailJs = ({validationAlert, setValidationAlert, setStatus}) => {

    const form = useRef()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault()

        const user_name = e.target.elements.user_name.value
        const user_email = e.target.elements.user_email.value
        const message = e.target.elements.message.value

        if (!user_name || !user_email || !message) {
            setValidationAlert(true)
        } else {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                .then(() => {
                    setStatus(true)
                    e.target.reset()
                }, (error) => {
                    console.log(error.text)
                })
        }
    }

    return (
        <EmailJsContainer validationAlert={validationAlert}>
            <h2>Jeżeli jesteś zainteresowany naszą ofertą, jesteśmy gotowy odpowiedzieć na wszelkie pytania.</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Imię</label>
                <input type="text" name="user_name" placeholder="Wpisz swoje imię"/>
                <label>E-mail</label>
                <input type="email" name="user_email" placeholder="Wpisz swój e-mail"/>
                <label>Wiadomość</label>
                <textarea name="message" />
                <SendBtn type="submit" value="Wyślij" />
            </form>
        </EmailJsContainer>
    )
}

export default EmailJs