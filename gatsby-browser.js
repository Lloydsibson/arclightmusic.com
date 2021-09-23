/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const Layout = require("./src/components/layout").default
const Header = require("./src/components/header").default
const Footer = require("./src/components/footer").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <>
      <Header />
      <Layout {...props}>
        <main>{element}</main>
      </Layout>
      <Footer />
    </>
  )
}
