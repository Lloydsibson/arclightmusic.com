import * as React from "react"

import Layout from "../components/layout"
import "./index.scss"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import UpcomingEvents from "../components/upcoming-events"
import HomePageCarousel from "../components/carousels/homepage-carousel"
import PartnersCarousel from "../components/carousels/partners-carousel"
import InstagramFeed from "../components/instagram-feed"
import Reviews from "../components/reviews"
import Seo from "../components/seo"

import "normalize.css"

// import { APIData } from "/src/Context"

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Funding Music with Music"
        description="Welcome to Arclight Music! See our latest events and what we offer"
      />
      <div className="hp-group">
        <UpcomingEvents />
        {/* <APIData.Consumer>
          {value => value.map(data => <p>{data.eventDay}</p>)}
        </APIData.Consumer> */}
        <HomePageCarousel />
      </div>
      <PartnersCarousel />
      <div className="white-background">
        <div className="divider">
          <svg
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
        <div className="ep-01">
          <div className="ep-01__image">
            <StaticImage
              src="../images/mission-image.jpg"
              width={900}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="venue stage"
            />
          </div>
          <div className="ep-01__information">
            <p className="ep-number">EP.01</p>
            <h2 className="ep-title">Our Misson</h2>
            <h3 className="ep-sub-title">
              Arclight was founded in 2019 with <span>2 main Goals:</span>
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
        <div className="ep-02">
          <div className="ep-02__inner-container">
            <p className="ep-number">EP.02</p>
            <h2 className="ep-title">What We Offer</h2>
            <h4 className="ep-text">
              Currently we only offer Events however our dedicated Arclight
              Apparel store will be opening in the near future. Keep an eye out
              as we will be launching our Musician Finder forum at a later date
              - think of 'Join My Band' but better.
            </h4>
            <div className="ep-02__cards">
              <Link to="events" className="ep-card">
                <div className="ep-card__icon">
                  <svg
                    className="events-icon"
                    viewBox="0 0 120 138"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M107.143 17.1788H94.2857V3.22102C94.2857 1.44946 92.8393 0 91.0714 0H80.3571C78.5893 0 77.1429 1.44946 77.1429 3.22102V17.1788H42.8571V3.22102C42.8571 1.44946 41.4107 0 39.6429 0H28.9286C27.1607 0 25.7143 1.44946 25.7143 3.22102V17.1788H12.8571C5.75893 17.1788 0 22.9498 0 30.0628V124.546C0 131.659 5.75893 137.43 12.8571 137.43H107.143C114.241 137.43 120 131.659 120 124.546V30.0628C120 22.9498 114.241 17.1788 107.143 17.1788ZM105.536 124.546H14.4643C13.5804 124.546 12.8571 123.821 12.8571 122.936V42.9469H107.143V122.936C107.143 123.821 106.42 124.546 105.536 124.546Z"
                      fill="#37AA9C"
                    />
                  </svg>
                  <p>{new Date().getDate()}</p>
                </div>
                <h5>Events</h5>
              </Link>
              <div className="ep-card">
                <div className="coming-soon-overlay">
                  <p>Coming Soon</p>
                </div>
                <div className="ep-card__icon">
                  <svg
                    viewBox="0 0 120 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M117.276 23.0615L104.631 2.91672C103.501 1.10835 101.495 0 99.3515 0H20.6408C18.4977 0 16.491 1.10835 15.361 2.91672L2.71663 23.0615C-3.81012 33.4645 1.97628 47.9314 14.1725 49.5842C15.0493 49.7009 15.9455 49.7592 16.8417 49.7592C22.6086 49.7592 27.7131 47.2314 31.22 43.323C34.7269 47.2314 39.8509 49.7592 45.5984 49.7592C51.3653 49.7592 56.4698 47.2314 59.9767 43.323C63.4836 47.2314 68.6076 49.7592 74.355 49.7592C80.122 49.7592 85.2265 47.2314 88.7334 43.323C92.2598 47.2314 97.3643 49.7592 103.112 49.7592C104.027 49.7592 104.904 49.7009 105.781 49.5842C118.016 47.9509 123.822 33.4839 117.276 23.0615ZM103.151 56.001C101.202 56.001 99.2736 55.7093 97.4033 55.2621V74.668H22.5891V55.2621C20.7188 55.6899 18.79 56.001 16.8417 56.001C15.6727 56.001 14.4843 55.9232 13.3348 55.7677C12.2437 55.6121 11.1722 55.3593 10.1396 55.0677V93.335C10.1396 96.7767 12.9256 99.5573 16.3741 99.5573H103.657C107.106 99.5573 109.892 96.7767 109.892 93.335V55.0677C108.84 55.3788 107.788 55.6315 106.697 55.7677C105.508 55.9232 104.339 56.001 103.151 56.001Z"
                      fill="#37AA9C"
                    />
                  </svg>
                </div>
                <h5>Store</h5>
              </div>
              <div className="ep-card">
                <div className="coming-soon-overlay">
                  <p>Coming Soon</p>
                </div>
                <div className="ep-card__icon">
                  <svg
                    width="120"
                    height="105"
                    viewBox="0 0 120 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60 0C26.8594 0 0 21.8203 0 48.75C0 60.375 5.01563 71.0156 13.3594 79.3828C10.4297 91.1953 0.632812 101.719 0.515625 101.836C0 102.375 -0.140625 103.172 0.164062 103.875C0.46875 104.578 1.125 105 1.875 105C17.4141 105 29.0625 97.5469 34.8281 92.9531C42.4922 95.8359 51 97.5 60 97.5C93.1406 97.5 120 75.6797 120 48.75C120 21.8203 93.1406 0 60 0Z"
                      fill="#37AA9C"
                    />
                  </svg>
                </div>
                <h5>Musician Finder</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="ep-03">
          <div className="ep-03__information">
            <p className="ep-number">EP.03</p>
            <h2 className="ep-title">Rage Against Cancer</h2>
            <h4 className="ep-text">
              Arclight Music are proud to welcome, along with our new team, Rage
              Against Cancer Festival to the family.
            </h4>
            <h4 className="ep-text">
              All profits from the festival will go directly to Teenage Cancer
              Trust as always and we couldn’t be more proud to be a part of this
              incredible annual festival.
            </h4>
            <div className="ep-03-buttons">
              <div to="rac" className="learn-more-btn donate">
                <button>Donate</button>
              </div>
              <Link to="rac-festival" className="learn-more-btn alt">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
          <div className="ep-03__image">
            <StaticImage
              src="../images/rac-image.jpg"
              width={715}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="live band"
            />
          </div>
        </div>
        <InstagramFeed />
        <Reviews />
      </div>
    </Layout>
  )
}

export default IndexPage
