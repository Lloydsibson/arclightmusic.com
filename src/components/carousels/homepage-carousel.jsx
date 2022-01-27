import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"

import React, { useState } from "react"
import Slider from "react-slick"

import "./homepage-carousel.scss"

// IMPORTS REACT CONTEXT
import { APIData } from "/src/Context"

// IMPORTS IMAGES
//import HalloweenBanner from "/src/images/Halloween-eventbrite-banner.jpg"
import NoEventsBanner from "/src/images/no-events-banner.jpg"
import AMLogo from "/src/images/website-logo.png"
import VideoPoster from "/src/images/video-background.jpg"
//import ContactBanner from "/src/images/mission-image.jpg"

const HomePageCarousel = () => {
  const [eventBriteBanner, setEventBriteBanner] = useState("")

  //console.log(eventBriteBanner)

  const carouselData = [
    {
      image: eventBriteBanner ? eventBriteBanner.eventImage : NoEventsBanner,
      title: "Arclight Music",
      subtitle: "Funding Music with Music",
      info: "Check out the latest events near you",
      btnOneText: "All Events",
      btnOneLink: "/events",
      btnTwoText: "Learn More",
      btnTwoLink: "/arclight-promotions",
    },
    // {
    //   image: ContactBanner,
    //   title: "You There!",
    //   subtitle:
    //     "Want to be a Partner or interested in playing at the next event?",
    //   info: "Just fill in the form on the contact page",
    //   btnOneText: "Contact",
    //   btnOneLink: "/contact",
    //   btnTwoText: "More Info",
    //   btnTwoLink: "/partners",
    // },
  ]

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: false,
    autoplaySpeed: 11500,
    lazyLoad: true,
    // fade: 2500,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="hp-carousel">
      <APIData.Consumer>
        {value => {
          setEventBriteBanner(
            value[0].eventBriteState[0] ? value[0].eventBriteState[0] : ""
          )
        }}
      </APIData.Consumer>
      <Slider {...settings}>
        <div>
          <div className="html-video-container">
            <div className="html-video-container__logo">
              <img src={AMLogo} alt="Logo" />
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              // ref="video"
              className="videoplayer"
              id="video"
              controlsList="nodownload"
              poster={VideoPoster}
            >
              <source
                src="https://res.cloudinary.com/arclight-music/video/upload/v1643157288/Website-Intro-Video-No-Logo-720-hb.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/arclight-music/video/upload/v1643157288/Website-Intro-Video-No-Logo-720-hb.ogg"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {carouselData.map((data, key) => (
          <div key={key}>
            <div
              className="hp-slide"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className="hp-slide__inner-container">
                <div className="slide-title">
                  <h3>{data.title}</h3>
                  <h4>{data.subtitle}</h4>
                  <p>{data.info}</p>
                </div>
                <div className="slide-btns">
                  <Link to={data.btnOneLink}>
                    {data.btnOneText}
                    <div className="slide-btn cta" role="button">
                      {data.btnOneText}
                    </div>
                  </Link>
                  <Link to={data.btnTwoLink}>
                    {data.btnTwoText}
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
