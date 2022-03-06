import * as React from "react"
import "./reviews.scss"

import { TrustPilotReviewCollector } from "./trust-pilot"

// IMPORTS IMAGES
// import NielImage from "/src/images/neil-fb-review.jpg"
//import ArclightMusicLogo from "/src/images/arclight-music-icon.png"

const Reviews = () => {
  // const reviewData = [
  //   {
  //     photo: NielImage,
  //     name: "Niall Barton",
  //     rating: "★★★★★",
  //     reviewTitle: "Facebook Review",
  //     review: "Sick team to work with. 5/5",
  //   },
  //   {
  //     photo: ArclightMusicLogo,
  //     name: "Did you enjoy our last event? Leave a review!",
  //     rating: "https://www.facebook.com/pg/ArclightPromotionsUK/reviews/",
  //     reviewTitle: "-",
  //     review: "-",
  //   },
  //   {
  //     photo: ArclightMusicLogo,
  //     name: "How did we do? Let us know by leaving a review",
  //     rating: "https://www.facebook.com/pg/ArclightPromotionsUK/reviews/",
  //     reviewTitle: "-",
  //     review: "-",
  //   },
  // ]

  return (
    <div className="reviews">
      <p className="ep-number">EP.05</p>
      <div className="review-title">
        <h2>Reviews</h2>
        <svg
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.0546 1.47355L12.3428 0.355164C12.8883 -0.118388 13.7703 -0.118388 14.31 0.355164L25.5909 10.1436C26.1364 10.6171 26.1364 11.3829 25.5909 11.8514L14.31 21.6448C13.7645 22.1184 12.8825 22.1184 12.3428 21.6448L11.0546 20.5264C10.5033 20.0479 10.5149 19.267 11.0778 18.7985L18.0703 13.0151H1.3927C0.620913 13.0151 0 12.4761 0 11.806V10.194C0 9.52393 0.620913 8.98489 1.3927 8.98489H18.0703L11.0778 3.20151C10.5091 2.733 10.4975 1.95214 11.0546 1.47355Z"></path>
        </svg>
      </div>
      <div className="reviews-container">
        <div className="review">
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
            alt="trustpilot score"
          />
          <h4>5/5!</h4>
          <p>
            The staff are super friendly and great guys all around, and the gigs
            they put on are amazing!! Great vibes and their merch is high
            quality. I've never had any problems with the sizing and the price
            is very fairly priced with fast shipping.
          </p>
        </div>
        <div className="review">
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
            alt="trustpilot score"
          />
          <h4>Great night at the shed seeing the 3…</h4>
          <p>
            Great night at the shed seeing the 3 bands organised by Arclight.
            Good music, good atmosphere and good price!
          </p>
        </div>
        {/* <div className="review">
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
            alt="trustpilot score"
          />
          <h4>Definitely a five star rating!</h4>
          <p>
            The tees arrived quickly and are top quality. They are super comfy
            and the sizing was is perfect! I will definitely be ordering more!
            Keep up the good work guys! ????
          </p>
        </div> */}
      </div>
      <div className="review-message">
        <p>
          Enjoyed an event? Leave us a review and share your experience with
          others &#128515;
        </p>
      </div>
      <div className="reviews__inner-container">
        {/* <div className="review-names-container">
          {reviewData.map((info, key) => (
            <div className="reviewer" key={key}>
              <img src={info.photo} alt="reviewer" />
              <div className="review__name">
                <h3>{info.name}</h3>
                <a href={info.rating} target="_blank" rel="noreferrer">
                  {info.rating}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="review-container">
          <div className="review">
            <h3>Facebook Review</h3>
            <p>"Sick team to work with. 5/5"</p>
          </div>
        </div> */}
        <TrustPilotReviewCollector />
      </div>
    </div>
  )
}

export default Reviews
