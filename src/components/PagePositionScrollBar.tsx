import React, { useEffect, useState } from "react"
import { deflate } from "zlib"
// SASS
import "./PagePositionScrollBar.scss"

const PagePositionScrollBar = () => {
  const [scrollWidth, setScrollWidth] = useState<string>("0")
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let scrollTop: number = window.scrollY
        let docHeight: number = document.body.offsetHeight
        let winHeight: number = window.innerHeight
        //console.log(scrollTop, docHeight, winHeight);
        let scrollPercent: number = scrollTop / (docHeight - winHeight)
        let scrollPercentRounded: string = Math.round(
          scrollPercent * 100
        ).toString()
        scrollPercentRounded = `${scrollPercentRounded}%`

        setScrollWidth(scrollPercentRounded)
        // document.querySelector(
        //   ".bar-container__bar"
        // ).style.width = `${scrollPercentRounded}%`;
      },
      false
    )
  }, [])
  return (
    <>
      <div className="bar-container">
        <div
          className="bar-container__bar"
          style={{ width: scrollWidth }}
        ></div>
      </div>
    </>
  )
}

export default PagePositionScrollBar
