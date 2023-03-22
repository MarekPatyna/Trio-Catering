import styled from "styled-components"
import { colors } from "../styled/Global"

export const Container = styled.div`
  background-color: ${colors.primaryBg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    font-size: clamp(1.875rem, 7vw, 2.8125rem);
    font-weight: 600;
    background-image: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 3.125rem;
  }
`

export const TestimonialsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 1.5625rem;
  max-width: 81.25rem;
  padding: 3.125rem 0.9375rem;
  @media (min-width: 900px) {
    flex-flow: row;
  }
  div {
    img {
      box-shadow: 0.25rem 0.25rem 0.9375rem 0 rgba(150, 150, 150, 1);
      border-radius: 0.625rem;
    }
  }
`