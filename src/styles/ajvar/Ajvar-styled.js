import styled from "styled-components";
import { colors } from "../styled/Global";

export const Container = styled.div`
  position: fixed;
  bottom: 0.9375rem;
  right: 0.9375rem;
  z-index: 9999;
  width: clamp(5.3125rem, 20vw, 8.125rem);
  cursor: pointer;
  border: 0.125rem solid red;
  border-radius: 0.625rem;
  box-shadow: 0 0 1.9375rem -0.625rem rgba(251, 0, 6, 1);
  background: white;

  p {
    font-size: clamp(0.625rem, 2.5vw, 1rem);
    color: ${colors.primaryFont};
    font-weight: 500;
    text-align: center;
    padding-top: 0.3125rem;
  }
  img {
    border-radius: 0.625rem;
    padding: 0.3125rem;
  }
`