import styled from "styled-components"
import { colors } from "../styled/Global"
import Slider from "react-slick"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.primaryBg};
`

export const RealizationsContainer = styled.section`
  max-width: 81.25rem;
  width: 100%;
  padding: 3.125rem 0.9375rem 4.6875rem 0.9375rem;
  @media (min-width: 330px) {
    padding: 3.125rem 0.9375rem;
  }
  h1 {
    font-size: clamp(1.875rem, 7vw, 2.8125rem);
    font-weight: 600;
    background-image: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 81.25rem;
  margin: 3.125rem 0 1.5625rem 0;
  position: relative;
  div {
    height: 18.75rem;
    @media (min-width: 750px) {
      height: 39.6875rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
  }
  .slick-list {
    border-radius: 0.625rem;
  }
  .slick-dots li button:before {
    background-color: ${colors.primaryFont};
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 0.3125rem;
    text-indent: -9999px;
    overflow: hidden;
    margin-top: 2.1875rem;
    @media (min-width: 330px) {
      margin-top: 0.625rem;
    }
  }
  .slick-next {
    display: none !important;
    @media (min-width: 750px) {
      position: absolute;
      top: 50%;
      right: 4.5%;
      z-index: 99;
      display: block !important;
    }
    @media (min-width: 900px) {
      right: 3.5%;
    }
    @media (min-width: 1050px) {
      right: 3%;
    }
    @media (min-width: 1150px) {
      right: 2.5%;
    }
    &::before {
      font-size: 3.125rem;
    }
  }

  .slick-prev {
    display: none !important;
    @media (min-width: 750px) {
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 99;
      display: block !important;
    }
    &::before {
      font-size: 3.125rem;
    }
  }
`
