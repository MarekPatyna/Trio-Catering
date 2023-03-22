import React, { useEffect, useState } from "react"
import {
  Container,
  HeaderContainer,
  HeaderLinks,
  TrioLogo,
} from "../../styles/header/Header-styled"
import StyledBurger from "../../components/header/HamburgerIcon"
import HamburgerMenu from "../../components/header/HamburgerMenu"
import { Link as LinkScroll } from "react-scroll"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleReSize = () => {
            window.innerWidth >= 750 && setShowMenu(false)
        }
        window.addEventListener('resize', handleReSize)
        return () => window.removeEventListener('resize', handleReSize)
    }, [])

    return (
        <Container showMenu={showMenu}>
            <HeaderContainer>
                <LinkScroll to="home" spy={true} smooth={true} duration={500} offset={-80}>
                    <TrioLogo />
                </LinkScroll>
                <HeaderLinks>
                    <li>
                        <LinkScroll to="about" spy={true} smooth={true} duration={500} offset={-80}>O NAS</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="realizations" spy={true} smooth={true} duration={500} offset={-80}>REALIZACJE</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="reviews" spy={true} smooth={true} duration={500} offset={-80}>OPINIE</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="testimonials" spy={true} smooth={true} duration={500} offset={-80}>REFERENCJE</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="contact" spy={true} smooth={true} duration={500} offset={-80}>KONTAKT</LinkScroll>
                    </li>
                </HeaderLinks>
                <StyledBurger showMenu={showMenu} setShowMenu={setShowMenu} />
            </HeaderContainer>
            <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </Container>
    )
}

export default Header