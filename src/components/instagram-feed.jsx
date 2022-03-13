import * as React from "react"
import { useState, useEffect } from "react"
import "./instagram-feed.scss"

const InstagramFeed = () => {
  const [instaIframe, setInstaIframe] = useState("")
  useEffect(() => {
    setInstaIframe(
      "https://www.juicer.io/api/feeds/arclight-music-insta-feed/iframe"
    )
    const script = document.createElement("script")
    script.src = "https://assets.juicer.io/embed.js"
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className="instagram-feed">
      <div className="instagram-feed__inner-container">
        <p className="ep-number">EP.04</p>
        <div className="instagram__title">
          <h2>Insta Feed</h2>
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
            ></path>
          </svg>
        </div>

        {/* INSTAGRAM FEED */}
        <ul
          className="juicer-feed"
          data-feed-id="arclight-music-insta-feed"
        ></ul>
        {/* ///////////////// */}
        {/* INSTAGRAM IFRAME - FIXES BUG - IMAGES COMING BACK WITH MISSING URL */}
        <iframe
          src={instaIframe}
          frameBorder="0"
          width="100%"
          height="500px"
          style={{ display: "none", margin: "0 auto" }}
        ></iframe>
        {/* ///////////////// */}
      </div>
    </div>
  )
}
export default InstagramFeed
