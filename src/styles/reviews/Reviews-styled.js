import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa"
import { colors } from "../styled/Global"

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-flow: column;
`

export const ReferencesContainer = styled.section`
  max-width: 81.25rem;
  width: 100%;
  padding: 3.125rem 0.9375rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h1 {
    font-size: clamp(1.875rem, 7vw, 2.8125rem);
    font-weight: 600;
    background-image: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const OpinionsContainer = styled.section`
  margin-top: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: ${colors.primaryFont};
  @media (min-width: 1150px) {
    flex-flow: row;
    align-items: flex-start;
    gap: 1rem;
  }
  div {
    width: 100%;
    display: flex;
    &:not(:first-child) {
      margin-top: 2.1875rem;
    }
    @media (min-width: 1150px) {
      margin-top: 2.1875rem;
    }
    article {
      display: flex;
      flex-flow: column;
      margin-left: 1.25rem;
      margin-top: 0.3125rem;
      padding: 0.3125rem;
      font-size: clamp(1rem, 3vw, 1.125rem);
      transition-duration: .40s;
      border-radius: 0.625rem;
      &:hover {
        background-color: rgb(211,211,211, .2);
      }
      h2 {
        font-style: italic;
        font-weight: 400;
        text-align: justify;
      }
      p {
        font-weight: 600;
        margin-top: 0.625rem;
      }
    }
  }
`

export const FacebookIcon = styled(FaFacebookSquare)`
  font-size: clamp(2.5rem, 7vw, 3.125rem);
  color: ${colors.facebook};
`
