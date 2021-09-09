import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"

import React from "react"
import Slider from "react-slick"

import "./partners-carousel.scss"

// IMPORTS IMAGES
import MonocodeLogo from "/src/images/monocode-logo.png"
import ShedLogo from "/src/images/shed-logo.png"
import StayfreeLogo from "/src/images/stayfree-logo.png"

const PartnersCarousel = () => {
  const partnerData = [
    {
      image: StayfreeLogo,
      link: "/partners",
      alt: "stayfree logo",
    },
    {
      image: ShedLogo,
      link: "/partners",
      alt: "the shed logo",
    },
    {
      image: MonocodeLogo,
      link: "/partners",
      alt: "monocode logo",
    },
    {
      image: StayfreeLogo,
      link: "/partners",
      alt: "stayfree logo",
    },
    {
      image: ShedLogo,
      link: "/partners",
      alt: "the shed logo",
    },
    {
      image: MonocodeLogo,
      link: "/partners",
      alt: "monocode logo",
    },
  ]

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3500,
    lazyLoad: true,
    //fade: 2500,
  }

  return (
    <div className="partner-carousel">
      <div className="partner-carousel__title">
        <h2>Our Partners</h2>
        <svg
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0546 1.47355L12.3428 0.355164C12.8883 -0.118388 13.7703 -0.118388 14.31 0.355164L25.5909 10.1436C26.1364 10.6171 26.1364 11.3829 25.5909 11.8514L14.31 21.6448C13.7645 22.1184 12.8825 22.1184 12.3428 21.6448L11.0546 20.5264C10.5033 20.0479 10.5149 19.267 11.0778 18.7985L18.0703 13.0151H1.3927C0.620913 13.0151 0 12.4761 0 11.806V10.194C0 9.52393 0.620913 8.98489 1.3927 8.98489H18.0703L11.0778 3.20151C10.5091 2.733 10.4975 1.95214 11.0546 1.47355Z"
            fill="white"
          />
        </svg>
      </div>
      <Slider {...settings}>
        {partnerData.map((data, key) => (
          <div key={key}>
            <div className="partner-slide">
              <Link to={data.link}>
                <img src={data.image} alt={data.alt} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PartnersCarousel
