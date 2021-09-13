import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Contact and reach out to us today" />
      <div className="contact-page">
        <h1>Contact</h1>
      </div>
    </Layout>
  )
}

export default ContactPage
