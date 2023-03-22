import React from "react"
import {
  FbIcon,
  MobileContainer,
  MobileLinks,
} from "../../styles/header/Header-styled"
import { Link as LinkScroll } from "react-scroll"

const HamburgerMenu = ({showMenu, setShowMenu}) => {

    const handleClick = () => setShowMenu(!showMenu)

    return (
        <MobileContainer showMenu={showMenu}>
            <MobileLinks>
                <li>
                    <LinkScroll to="about" spy={true} smooth={true} duration={500} offset={-80} onClick={handleClick}>O NAS</LinkScroll>
                </li>
                <li>
                    <LinkScroll to="realizations" spy={true} smooth={true} duration={500} offset={-80} onClick={handleClick}>REALIZACJE</LinkScroll>
                </li>
                <li>
                    <LinkScroll to="reviews" spy={true} smooth={true} duration={500} offset={-80} onClick={handleClick}>OPINIE</LinkScroll>
                </li>
                <li>
                    <LinkScroll to="testimonials" spy={true} smooth={true} duration={500} offset={-80} onClick={handleClick}>REFERENCJE</LinkScroll>
                </li>

                <li>
                    <LinkScroll to="contact" spy={true} smooth={true} duration={500} offset={-80} onClick={handleClick}>KONTAKT</LinkScroll>
                </li>
                <li>
                    <a href="https://www.facebook.com/triocateringwroclaw"><FbIcon /></a>
                </li>
            </MobileLinks>
        </MobileContainer>
    )
}

export default HamburgerMenu