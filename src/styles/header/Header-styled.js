import styled from "styled-components"
import trio from "../../assets/img/trio-logo80.webp"
import { BsFacebook } from "react-icons/bs"
import { colors } from "../styled/Global"

export const Container = styled.div`
  box-shadow: 0 0 0.625rem 0 ${colors.headerShadow};
  position: fixed;
  top: 0;
  width: 100%;
  background: ${colors.white};
  z-index: 99999;
  height: 5rem;
`

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9375rem;
`

export const TrioLogo = styled.div`
  background-image: url("${trio}");
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`



export const HeaderLinks = styled.ul`
  cursor: pointer;
  display: none;
  @media (min-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${colors.primaryFont};
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  li {
    transition-duration: .35s;
    &:hover {
      color: ${colors.gray};
    }
    a {
      border-bottom: 0.3125rem solid transparent;
      transition-duration: .25s;
    }
  }
  .active {
    border-bottom: 0.3125rem solid ${colors.logoGreen};
    padding-bottom: 0.4375rem;
  }
`

export const MobileIcon = styled.div`
  width: 2rem;
  height: 1.4rem;
  top: 0.9375rem;
  right: 0.9375rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  z-index: 999;
  @media (min-width: 750px) {
    display: none;
  }
  div {
    width: 1.78rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 0.625rem;
    transform-origin: 0.0625rem;
    transition: all 0.088s linear;
    &:nth-child(1) {
     transform: ${props => props.showMenu ? 'rotate(45deg)' : ''};
     background-color: ${props => props.showMenu ? '#00BB66' : '#008F89'};
    }
    &:nth-child(2) {
      opacity: ${props => props.showMenu ? 0 : 1};
      background-color: ${props => props.showMenu ? '' : '#008F89'};
    }
    &:nth-child(3) {
     transform: ${props => props.showMenu ? 'rotate(-45deg)' : ''};
     background-color: ${props => props.showMenu ? '#00BB66' : '#008F89'};
    }
  }
`

export const MobileContainer = styled.section`
  position: absolute;
  top: 5rem;
  width: 100%;
  background-image: ${colors.gradient};
  color: ${colors.white};
  transition-duration: .35s;
  transform: ${props => props.showMenu ? "translateX(0)" : "translateX(100%)"};
  @media (min-width: 750px) {
    display: none;
  }
`

export const MobileLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-weight: 700;
  padding: 1.5625rem;
  li {
    padding: 0.9375rem;
    a {
      border-bottom: 0.3125rem solid transparent;
      transition-duration: .25s;
    }
  }
  .active {
    border-bottom: 0.3125rem solid ${colors.white};
    padding-bottom: 0.4375rem;
  }
`

export const FbIcon = styled(BsFacebook)`
  font-size: 1.25rem;
`