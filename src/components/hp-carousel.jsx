import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"

import React from "react"
import Slider from "react-slick"

import "./hp-carousel.scss"

// IMPORTS IMAGES
import HalloweenBanner from "../images/Halloween-eventbrite-banner.jpg"

const HomePageCarousel = () => {
  const carouselData = [
    {
      image: HalloweenBanner,
      title: "Arclight Apparel",
      subtitle: "No Music, No Life T-shirt",
      info: "Range of Colours Available",
      btnOneText: "Buy T-Shirt",
      btnOneLink: "/events",
      btnTwoText: "More Apparel",
      btnTwoLink: "/events",
    },
    {
      image: HalloweenBanner,
      title: "Arclight Promotions",
      subtitle: "Battle of the Bands",
      info: "25th December | Doors open at 7pm",
      btnOneText: "Buy Tickets",
      btnOneLink: "/events",
      btnTwoText: "More Events",
      btnTwoLink: "/events",
    },
    {
      image: HalloweenBanner,
      title: "Hey!",
      subtitle:
        "Want to be a Partner or interested in playing at the next event?",
      info: "Just fill in the form on the contact page and we will aim to respond to all enquiries within 3 working days",
      btnOneText: "Contact",
      btnOneLink: "/events",
      btnTwoText: "More Info",
      btnTwoLink: "/events",
    },
  ]

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 10500,
    lazyLoad: true,
    fade: 2500,
  }

  return (
    <div className="hp-carousel">
      <Slider {...settings}>
        {carouselData.map((data, key) => (
          <div>
            <div
              className="hp-slide"
              style={{ backgroundImage: `url(${data.image})` }}
              key={key}
            >
              <div className="hp-slide__inner-container">
                <div className="slide-title">
                  <h3>{data.title}</h3>
                  <h4>{data.subtitle}</h4>
                  <p>{data.info}</p>
                </div>
                <div className="slide-btns">
                  <Link to={data.btnOneLink}>
                    <div className="slide-btn cta" role="button">
                      {data.btnOneText}
                    </div>
                  </Link>
                  <Link to={data.btnTwoLink}>
                    <div className="slide-btn more" role="button">
                      {data.btnTwoText}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="slide-overlay"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomePageCarousel
