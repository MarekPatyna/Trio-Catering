import React from "react"
import { MobileIcon } from "../../styles/header/Header-styled"

const StyledBurger = ({showMenu, setShowMenu}) => {

    return (
        <MobileIcon showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
            <div />
            <div />
            <div />
        </MobileIcon>
    )
}

export default StyledBurger