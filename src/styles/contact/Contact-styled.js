import styled from "styled-components"
import { BsFacebook } from "react-icons/bs"
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { colors } from "../styled/Global"
import contactbg from "../../assets/img/contactbg.webp"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactContainer = styled.section`
  max-width: 81.25rem;
  width: 100%;
  padding: 3.125rem 0.9375rem;
  h1 {
    font-size: clamp(1.875rem, 7vw, 2.8125rem);
    font-weight: 600;
    background-image: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`

export const FlexCon = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-top: 3.125rem;
  gap: 5rem;
  @media (min-width: 750px) {
    flex-flow: row;
    justify-content: space-between;
  }
`

export const BusinessCard = styled.article`
  color: ${colors.white};
  background-image: url(${contactbg});
  background-position: center;
  background-size: cover;
  height: 34.375rem;
  display: flex;
  align-items: flex-end;
  @media (min-width: 750px) {
    justify-content: flex-start;
    margin-top: 0;
    height: auto;
    min-width: 21.875rem;
  }
  @media (min-width: 1050px) {
    min-width: 31.25rem;
  }
`

export const CardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  background-color: rgb(75, 74, 72, 0.7);
  width: 100%;
  padding: 1.875rem;
  p {
    font-size: clamp(1.3125rem, 4vw, 1.5625rem);
    line-height: 1.5;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1.25rem;
      font-size: clamp(1rem, 3vw, 1.125rem);
    }
  }
`

export const EmailJsContainer = styled.section`
  @media (min-width: 900px) {
    width: 32.1875rem;
  }
  h2 {
    color: ${colors.primaryFont};
    font-size: clamp(1.125rem, 4vw, 1.5625rem);
    text-align: center;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: ${colors.formBg};
    border-radius: 0.625rem;
    box-shadow: 0 0 1.25rem ${colors.shadow};
    padding: 0 1.25rem;
    margin-top: 3.125rem;
    label {
      margin-top: 1.25rem;
      color: ${colors.primaryFont};
    }
    textarea {
      border: 0.0625rem solid ${(props) => props.validationAlert ? colors.alert : colors.lightGray};
      width: 100%;
      height: 10.625rem;
      border-radius: 0.625rem;
      margin-top: 1.25rem;
      padding: 0.625rem;
      overflow-wrap: break-word;
    }
    input:not(:last-child) {
      border: 0.0625rem solid ${(props) => props.validationAlert ? colors.alert : colors.lightGray};
      padding: 0.9375rem;
      width: 100%;
      border-radius: 0.625rem;
    }
    input {
      margin-top: 1.25rem;
      &::placeholder {
        color: ${(props) => props.validationAlert ? colors.alert : colors.gray};
        font-style: italic;
      }
    }
  }
`

export const SendBtn = styled.input`
  padding: 0.625rem 2.1875rem;
  background-image: ${colors.gradient};
  color: ${colors.white};
  border-radius: 0.625rem;
  margin: 3.125rem 0;
  cursor: pointer;
  transition-duration: .35s;
  &:hover {
    opacity: .7;
  }
`

export const Alert = styled.div`
  position: fixed;
  z-index: 1055;
  top: 5rem;
  left: 0;
  right: 0;
  padding: 0.625rem 0;
  text-align: center;
  background-color: ${(props) => props.validationAlert ? colors.alert : colors.logoGreen};
  color: ${colors.white};
  font-size: 1.25rem;
`

export const FbIcon = styled(BsFacebook)`
  font-size: 1.875rem;
`

export const PhoneIcon = styled(AiFillPhone)`
  font-size: 1.875rem;
`

export const EmailIcon = styled(AiTwotoneMail)`
  font-size: 1.875rem;
`

export const MapIcon = styled(FaMapMarkerAlt)`
  font-size: 1.875rem;
`