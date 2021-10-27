import React, { useEffect, useRef } from "react"
import "./trust-pilot.scss"

export const TrustPilotMRC = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div
      className="trustpilot-widget micro-review-counter"
      data-locale="en-GB"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="61797bc03656528ca4ac50ef"
      data-style-height="24px"
      data-style-width="100%"
      data-theme="dark"
    >
      <a
        href="https://uk.trustpilot.com/review/www.arclightmusic.co.uk"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  )
}

export const TrustPilotReviewCollector = () => {
  const ref = useRef(null)
  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])
  return (
    <div
      ref={ref}
      className="trustpilot-widget review-collector"
      data-locale="en-GB"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="61797bc03656528ca4ac50ef"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://uk.trustpilot.com/review/www.arclightmusic.co.uk"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  )
}
