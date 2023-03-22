import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { gallery } from "../../data/data"
import { StyledSlider } from "../../styles/realizations/Realizations-styled"

const RealizationsSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true
    }

    return (
        <StyledSlider {...settings}>
            {gallery.map((item) => {
                const {id, imgSrc} = item
                return <div key={id}>
                    <img src={imgSrc} alt="realizations"/>
                </div>
            })}
        </StyledSlider>
    )
}

export default RealizationsSlider