import React, { useEffect, useState } from "react"
// SASS
import "./eventbrite-api.scss"

import { APIData } from "/src/Context"

const EventBriteAPIData = ({ children }) => {
  const [numberOfCurrentEvents, setNumberOfCurrentEvents] = useState()
  const [loadingMessage, setLoadingMessage] = useState("Loading Events...")
  const [eventBriteState, setEventBriteState] = useState([])
  const [apiLoaded, setapiLoaded] = useState(false)

  const fetchEventApi = async () => {
    try {
      // FETCH ALL LIVE EVENTS - NEWEST FIRST
      const eventFetch = await fetch(
        `https://www.eventbriteapi.com/v3/organizers/28941769095/events/?status=live&order_by=start_asc&token=M3QX3EGISISAIVAZQEGL`
      )
      const events = await eventFetch.json()
      //console.log(events)
      const eventsData = await events.events
      // await events.events
      setNumberOfCurrentEvents(eventsData.length)
      // // IF EVENT DATA EXISTS...
      if (eventsData.length > 0) {
        for (const loopedEventData of eventsData) {
          // console.log(loopedEventData)
          const eventID = await loopedEventData.id
          // FETCH VENUE INFO
          const venueResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=M3QX3EGISISAIVAZQEGL`
          )
          // FETCH TICKET INFO
          const ticketResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=ticket_availability&token=M3QX3EGISISAIVAZQEGL`
          )
          const ticketInfo = await ticketResponse.json()
          // FETCH CATEGORY INFO
          const categoryResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=subcategory&token=M3QX3EGISISAIVAZQEGL`
          )
          const venueInfo = await venueResponse.json()
          const eventCity = venueInfo.venue.address.city
          const CategoryInfo = await categoryResponse.json()
          const eventTimeRaw = loopedEventData.start.local
          const eventFullTime = eventTimeRaw.split("T")[1]
          const eventDateString = eventTimeRaw.split("T")[0]
          const monthRaw = eventDateString.split("-")[1]
          let eventMonth = ""
          const eventURL = loopedEventData.url
          const eventImage = loopedEventData.logo.original.url
          const eventTitle = loopedEventData.name.text
          const eventVenueName = venueInfo.venue.name
          const eventSubCategory = CategoryInfo.subcategory.name
          const eventSummary = loopedEventData.description.text
          const eventDay = eventDateString.split("-")[2]
          const eventTime24HR = eventFullTime.slice(0, 5)
          const eventTicketPrice =
            ticketInfo.ticket_availability.maximum_ticket_price.major_value

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
              eventMonth = "Sep"
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

          const time_part_array = eventTime24HR.split(":")
          let ampm = "AM"
          if (time_part_array[0] >= 12) {
            ampm = "PM"
          }
          if (time_part_array[0] > 12) {
            time_part_array[0] = time_part_array[0] - 12
          }
          const eventTime12HR =
            time_part_array[0] + ":" + time_part_array[1] + ampm

          // UPDATE STATE WITH DATA
          setapiLoaded(true)
          setEventBriteState(result => [
            ...result,
            {
              eventURL: `${eventURL}`,
              eventImage: `${eventImage}`,
              eventTitle: `${eventTitle}`,
              eventVenueName: `${eventVenueName}`,
              eventCity: `${eventCity}`,
              eventSubCategory: `${eventSubCategory}`,
              eventSummary: `${eventSummary}`,
              eventDay: `${eventDay}`,
              eventMonth: `${eventMonth}`,
              eventTime: `${eventTime12HR}`,
              eventTicketPrice: `£${eventTicketPrice}`,
            },
          ])
        }
        setLoadingMessage("Events Found")
      } else {
        setLoadingMessage(
          <p>OMG! No Events - Help Us Change That! &#128521;</p>
        )
      }
    } catch (err) {
      setLoadingMessage(
        "API Error! Please refresh the page. If this persits please contact us about this issue."
      )
      //console.log("API - Fetch Failed")
    }
  }

  useEffect(() => {
    fetchEventApi()
  }, [])

  return (
    <APIData.Provider
      value={[
        { eventBriteState },
        { numberOfCurrentEvents },
        { loadingMessage },
        { apiLoaded },
      ]}
    >
      {children}
    </APIData.Provider>
  )
}

export default EventBriteAPIData
