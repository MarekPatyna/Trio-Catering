import styled from "styled-components"
import {colors} from "../styled/Global"

export const Container = styled.div`
  background-color: ${colors.logoGreen};
`

export const FooterContainer = styled.section`
  padding: 0.9375rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: clamp(0.6875rem, 3vw, 1rem);
    color: ${colors.white};
    a {
      font-style: italic;
      font-weight: 600;
    }
  }
`