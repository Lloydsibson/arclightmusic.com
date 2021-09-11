/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

import Footer from "./footer"
import MobileSideBar from "./mobile-sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // useEffect(() => {
  //   const html = document.documentElement
  // }, [])

  const NavOverlayToggle = () => {
    const html = document.documentElement
    html.classList.remove("menu-open")
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    setTimeout(() => {
      const menu = document.querySelector(".mobile-sidebar")
      menu.style.display = "none"
    }, 400)
  }

  return (
    <>
      <div className="page-container">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </div>
      <MobileSideBar />
      <div
        className="mobile-sidebar-overlay"
        onClick={e => NavOverlayToggle(e)}
      ></div>
    </>
  )
}

export default Layout
