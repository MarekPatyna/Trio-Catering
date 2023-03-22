import React from "react"
import {
  Container,
  TestimonialsContainer,
} from "../../styles/testimonials/Testimonials-styled"
import ref1 from "../../assets/img/ref/ref1.webp"
import ref2 from "../../assets/img/ref/ref2.webp"

const Testimonials = () => {
    return (
        <Container id="testimonials">
            <h1>REFERENCJE</h1>
            <TestimonialsContainer>
                <div>
                    <img src={ref1} alt="references"/>
                </div>
                <div>
                    <img src={ref2} alt="references"/>
                </div>
            </TestimonialsContainer>
        </Container>
    )
}

export default Testimonials