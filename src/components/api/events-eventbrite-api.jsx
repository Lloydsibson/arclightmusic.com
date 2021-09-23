import React, { useEffect, useState } from "react"
// SASS
//import "./eventbrite-api.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const EventPageEventbriteAPI = () => {
  const [numberOfCurrentEvents, setNumberOfCurrentEvents] = useState("")
  const [eventBriteAPIData, setEventBriteAPIData] = useState([])

  console.log(eventBriteAPIData)
  useEffect(() => {
    const fetchEventApi = async () => {
      try {
        // FETCH ALL LIVE EVENTS - NEWEST FIRST
        const eventFetch = await fetch(
          `https://www.eventbriteapi.com/v3/organizers/28941769095/events/?status=live&order_by=start_asc&token=M3QX3EGISISAIVAZQEGL`
        )
        const events = await eventFetch.json()
        //console.log(events)
        const eventsData = await events.events
        setNumberOfCurrentEvents(eventsData.length)

        // // IF EVENT DATA EXISTS...
        if (eventsData.length > 0) {
          for (const loopedEventData of eventsData) {
            //console.log(loopedEventData)
            const eventID = await loopedEventData.id
            //console.log(eventTitle)
            //FETCH VENUE INFO
            const venueResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=M3QX3EGISISAIVAZQEGL`
            )
            const venueInfo = await venueResponse.json()
            //console.log(venueInfo)
            // FETCH TICKET INFO
            const ticketResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=ticket_availability&token=M3QX3EGISISAIVAZQEGL`
            )
            const ticketInfo = await ticketResponse.json()
            //console.log(ticketInfo)
            // FETCH CATEGORY INFO
            const categoryResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=subcategory&token=M3QX3EGISISAIVAZQEGL`
            )
            const CategoryInfo = await categoryResponse.json()
            //console.log(CategoryInfo)
            const eventTimeRaw = loopedEventData.start.local
            const eventFullTime = eventTimeRaw.split("T")[1]
            const eventDateString = eventTimeRaw.split("T")[0]
            //const Year = eventDateString.split("-")[0];
            const monthRaw = eventDateString.split("-")[1]
            let eventMonth = ""
            // CONVERTS MONTH NUMBER TO MONTH NAME
            switch (monthRaw) {
              case "01":
                eventMonth = "Jan"
                break
              case "02":
                eventMonth = "Feb"
                break
              case "03":
                eventMonth = "Mar"
                break
              case "04":
                eventMonth = "Apr"
                break
              case "05":
                eventMonth = "May"
                break
              case "06":
                eventMonth = "Jun"
                break
              case "07":
                eventMonth = "Jul"
                break
              case "08":
                eventMonth = "Aug"
                break
              case "09":
                eventMonth = "Sept"
                break
              case "10":
                eventMonth = "Oct"
                break
              case "11":
                eventMonth = "Nov"
                break
              case "12":
                eventMonth = "Dec"
                break
              default:
                eventMonth = "N/A"
            }
            const eventURL = loopedEventData.url
            const eventImage = loopedEventData.logo.original.url
            const eventTitle = loopedEventData.name.text
            const eventVenueName = venueInfo.venue.name
            const eventSubCategory = CategoryInfo.subcategory.name
            const eventSummary = loopedEventData.description.text
            const eventDay = eventDateString.split("-")[2]
            let eventTime = eventFullTime.slice(0, 5)
            const eventTicketPrice =
              ticketInfo.ticket_availability.maximum_ticket_price.major_value

            setEventBriteAPIData(result => [
              ...result,
              {
                eventURL: `${eventURL}`,
                eventImage: `${eventImage}`,
                eventTitle: `${eventTitle}`,
                eventVenueName: `${eventVenueName}`,
                eventSubCategory: `${eventSubCategory}`,
                eventSummary: `${eventSummary}`,
                eventDay: `${eventDay}`,
                eventMonth: `${eventMonth}`,
                eventTime: `${eventTime}`,
                eventTicketPrice: `£${eventTicketPrice}`,
              },
            ])
          }
        } else {
        }
      } catch (err) {}
    }
    fetchEventApi()
  }, [])

  return (
    <div className="events-page">
      <div className="events-page__inner-container">
        <div className="events-title-container">
          <div className="events-title-container__title">
            <h1>Events</h1>
            <div id="events-counter">
              {numberOfCurrentEvents > 0 ? numberOfCurrentEvents : "0"}
            </div>
          </div>
          <div className="events-title-container__filters">
            <label htmlFor="CatSelect">Categories:</label>
            <select id="CatSelect">
              <option>All</option>
              <option>Rock</option>
              <option>Metal</option>
              <option>Alt</option>
              <option>Other</option>
            </select>
            <a href="https://www.eventbrite.co.uk/o/arclight-promotions-uk-28941769095">
              <h3>Past Events</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPageEventbriteAPI
