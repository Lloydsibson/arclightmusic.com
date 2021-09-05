import * as React from "react"

import Layout from "../components/layout"
import "./index.scss"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import UpcomingEvents from "../components/upcoming-events"
import HomePageCarousel from "../components/carousels/homepage-carousel"
import PartnersCarousel from "../components/carousels/partners-carousel"
import Seo from "../components/seo"

import "normalize.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <UpcomingEvents />
      <HomePageCarousel />
      <PartnersCarousel />
      <div className="white-background">
        <div className="divider">
          <svg
            width="1920"
            height="277"
            viewBox="0 0 1920 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 88.75L18.8 107.304C37.6 126.207 74.6667 162.793 113.333 153.821C150.533 144.5 188 88.75 225.333 79.4293C263.467 70.457 301.333 107.043 338.667 112.008C376.533 116.625 414.667 88.75 452 74.8125C489.467 60.875 526.667 60.875 565.333 98.0707C602.4 134.918 640 209.832 677.333 223.508C715.333 237.707 753.333 190.668 790.667 149.117C828.267 107.043 865.333 70.457 904 84.1332C941.2 98.332 978.667 162.793 1016 181.696C1054.13 200.25 1092 172.375 1129.33 163.054C1167.07 154.082 1205.33 162.793 1242.67 172.375C1280 181.957 1317.33 190.668 1354.67 200.25C1392.93 209.832 1430.67 218.543 1468 190.929C1505.87 162.793 1544 98.332 1581.33 84.1332C1618.8 70.457 1656 107.043 1694.67 144.5C1731.73 181.957 1769.33 218.543 1806.67 237.446C1844.67 256 1882.67 256 1901.33 256H1920V33H1901.2C1882.4 33 1845.33 33 1806.67 33C1769.47 33 1732 33 1694.67 33C1656.53 33 1618.67 33 1581.33 33C1543.47 33 1505.33 33 1468 33C1430.53 33 1393.33 33 1354.67 33C1317.6 33 1280 33 1242.67 33C1204.67 33 1166.67 33 1129.33 33C1091.73 33 1054.67 33 1016 33C978.8 33 941.333 33 904 33C865.867 33 828 33 790.667 33C752.933 33 714.667 33 677.333 33C640 33 602.667 33 565.333 33C527.067 33 489.333 33 452 33C414.133 33 376 33 338.667 33C301.2 33 264 33 225.333 33C188.267 33 150.667 33 113.333 33C75.3333 33 37.3333 33 18.6667 33H0V88.75Z"
              fill="#37AA9C"
            />
            <path
              d="M0 69.25L18.8 92.2973C37.6 115.777 74.6667 161.223 113.333 150.078C150.533 138.5 188 69.25 225.333 57.6723C263.467 46.5273 301.333 91.9727 338.667 98.1402C376.533 103.875 414.667 69.25 452 51.9375C489.467 34.625 526.667 34.625 565.333 80.8277C602.4 126.598 640 219.652 677.333 236.64C715.333 254.277 753.333 195.848 790.667 144.235C828.267 91.9727 865.333 46.5273 904 63.5152C941.2 81.1523 978.667 161.223 1016 184.703C1054.13 207.75 1092 173.125 1129.33 161.547C1167.07 150.402 1205.33 161.223 1242.67 173.125C1280 185.027 1317.33 195.848 1354.67 207.75C1392.93 219.652 1430.67 230.473 1468 196.172C1505.87 161.223 1544 81.1523 1581.33 63.5152C1618.8 46.5273 1656 91.9727 1694.67 138.5C1731.73 185.027 1769.33 230.473 1806.67 253.953C1844.67 277 1882.67 277 1901.33 277H1920V0H1901.2C1882.4 0 1845.33 0 1806.67 0C1769.47 0 1732 0 1694.67 0C1656.53 0 1618.67 0 1581.33 0C1543.47 0 1505.33 0 1468 0C1430.53 0 1393.33 0 1354.67 0C1317.6 0 1280 0 1242.67 0C1204.67 0 1166.67 0 1129.33 0C1091.73 0 1054.67 0 1016 0C978.8 0 941.333 0 904 0C865.867 0 828 0 790.667 0C752.933 0 714.667 0 677.333 0C640 0 602.667 0 565.333 0C527.067 0 489.333 0 452 0C414.133 0 376 0 338.667 0C301.2 0 264 0 225.333 0C188.267 0 150.667 0 113.333 0C75.3333 0 37.3333 0 18.6667 0H0V69.25Z"
              fill="#1A1A1B"
            />
          </svg>
        </div>
        <div className="mission">
          <div className="mission__image">
            <StaticImage
              src="../images/mission-image.jpg"
              width={900}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="venue stage"
            />
          </div>
          <div className="mission__text">
            <p className="ep-number">EP.01</p>
            <h2 className="ep-title">Our Misson</h2>
            <h3 className="ep-sub-title">
              Arclight was founded in 2019 with 2 main Goals:
            </h3>
            <h4 className="ep-text">
              <span>1.</span> To give younger musicians more opportunity to get
              experience performing and the chance to showcase themselves.
            </h4>
            <h4 className="ep-text">
              <span>2.</span> To improve funding in music education to provide a
              better chance for underprivileged children whos families can’t
              afford the cost of learning to play an instrument
            </h4>
            <Link to="about" className="learn-more-btn">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
