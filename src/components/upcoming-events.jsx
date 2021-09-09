import * as React from "react"
//import { useState, useEffect } from "react"
import "./upcoming-events.scss"

import EventbriteEvents from "./api/eventbrite-api"

const UpcomingEvents = () => {
  const day = new Date().getDate()
  const monthRaw = new Date().getMonth()
  let month = ""
  const year = new Date().getFullYear()

  // ADDS 'ST', 'ND', 'RD' OR 'TH' TO DAY
  const ordinalSuffix = d => {
    if (d > 3 && d < 21) {
      return `${d}th`
    } else {
      switch (d % 10) {
        case 1:
          return `${d}st`
        case 2:
          return `${d}nd`
        case 3:
          return `${d}rd`
        default:
          return `${d}th`
      }
    }
  }

  // CONVERTS MONTH NUMBER TO MONTH NAME
  switch (monthRaw) {
    case 0:
      month = "January"
      break
    case 1:
      month = "February"
      break
    case 2:
      month = "March"
      break
    case 3:
      month = "April"
      break
    case 4:
      month = "May"
      break
    case 5:
      month = "June"
      break
    case 6:
      month = "July"
      break
    case 7:
      month = "August"
      break
    case 8:
      month = "September"
      break
    case 9:
      month = "October"
      break
    case 10:
      month = "November"
      break
    case 12:
      month = "December"
      break
    default:
      month = "..."
  }

  const currentFullDate = `${ordinalSuffix(day)} ${month} ${year}`

  return (
    <div className="upcoming-events">
      <div className="upcoming-events__inner-container">
        <p>Today, {currentFullDate}</p>
        <div className="upcoming-events__title">
          <h2>Upcoming Events</h2>
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
        <div className="upcoming-events__events">
          <EventbriteEvents />
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
