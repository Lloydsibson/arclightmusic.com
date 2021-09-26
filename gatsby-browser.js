/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

/////////
// REPLICATE ANY CHANGES IN 'gatsby-ssr.js'
/////////

const React = require("react")
const Layout = require("./src/components/layout").default
const Header = require("./src/components/header").default
const Footer = require("./src/components/footer").default
const MobileSideBar = require("./src/components/mobile-sidebar").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  // console.log(props)
  return (
    <>
      <div className="page-container">
        <Header />
        <Layout {...props}>
          <main>{element}</main>
        </Layout>
        <Footer />
      </div>
      <MobileSideBar />
    </>
  )
}

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    console.log("Loaded")
    const loaComp = document.querySelector(".loading-screen")
    loaComp.classList.add("-show_page")
  })
}
