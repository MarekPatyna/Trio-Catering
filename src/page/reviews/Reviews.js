import React from "react"
import {
  Container,
  OpinionsContainer,
  ReferencesContainer,
} from "../../styles/reviews/Reviews-styled"
import { opinions } from "../../data/data"

const Reviews = () => {
    return (
        <Container id="reviews">
            <ReferencesContainer>
                <h1>OPINIE</h1>
                <OpinionsContainer>
                    {
                        opinions.map((item) => {
                            const {id, text, client, icon} = item
                            return <div key={id}>
                                <span>{icon}</span>
                                <article>
                                    <h2>{text}</h2>
                                    <p>─ {client}</p>
                                </article>
                            </div>
                        })
                    }
                </OpinionsContainer>
            </ReferencesContainer>
        </Container>
    )
}

export default Reviews