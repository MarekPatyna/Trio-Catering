import styled from "styled-components"
import foodbg from '../../assets/img/foodbg.webp'
import { colors } from "../styled/Global"

export const Container = styled.div`
  background-image: url("${foodbg}");
  width: 100%;
  min-height: 21.875rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 5rem;
`

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 0.5rem;
  min-height: 21.875rem;
  text-align: center;
  padding: 0 0.9375rem;
  @media (min-width: 750px) {
    min-height: 28.125rem;
  }
  @media (min-width: 1800px) {
    min-height: 34.375rem;
  }
  h1 {
    color: ${colors.white};
    font-weight: 800;
    font-size: clamp(2.5rem, 9vw, 5rem);
  }
  div {
    font-size: clamp(1.125rem, 4vw, 2.25rem);
    p {
      color: ${colors.white};
      font-weight: 700;
    }
  }
`