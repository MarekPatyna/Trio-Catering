import styled from "styled-components"
import { colors } from "../styled/Global"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const AboutContainer = styled.section`
  padding: 3.125rem 0.9375rem;
  max-width: 81.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  @media (min-width: 900px) {
    flex-flow: row;
    gap: 2rem;
  }
`

export const AboutInfo = styled.article`
  @media (min-width: 900px) {
    max-width: 28.125rem;
  }
  @media (min-width: 1300px) {
    max-width: 44.0625rem;
  }
  h1 {
    font-size: clamp(1.875rem, 7vw, 2.8125rem);
    font-weight: 600;
    background-image: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.45;
    margin-top: 3.125rem;
    text-align: justify;
    padding: 1.25rem;
    border: 0.125rem solid ${colors.lightGray};
    border-radius: 0.625rem;
    box-shadow: 0 0 1.25rem ${colors.shadow};
    color: ${colors.primaryFont};
    span {
      font-weight: 700;
    }
  }
`

export const ContactButton = styled.button`
  padding: 0.9375rem 3.4375rem;
  background-image: ${colors.gradient};
  color: ${colors.white};
  border-radius: 0.625rem;
  margin-top: 3.125rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition-duration: .35s;
  &:hover {
    opacity: .7;
  }
`

export const AboutPhoto = styled.div`
  margin-top: 3.125rem;
  @media (min-width: 900px) {
    margin-top: 0.3125rem;
    max-width: 40%;
  }
  @media (min-width: 1300px) {
    margin-top: 0;
  }
  img {
    max-width: 100%;
    border-radius: 0.625rem;
  }
`