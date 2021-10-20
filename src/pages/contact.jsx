import React from "react"

import "./contact.scss"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

//import Recaptcha from "react-google-recaptcha"
// SITE-KEY = 6LepgIMcAAAAADZ5mL8-ganvF1-rVwQhvSzQy2VK
// SECRET KEY = 6LepgIMcAAAAABL2L8liWh_hSLYe9wm0Yqn-fTbj

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactPage = () => {
  // const [buttonDisabled, setButtonDisabled] = useState(true)
  const data = useStaticQuery(graphql`
    query ContactPage {
      allContentfulRichContent(
        filter: { id: { eq: "4a9215e6-e5e0-5fcd-a21f-6b61e484d0cc" } }
      ) {
        edges {
          node {
            pageText {
              raw
            }
          }
        }
      }
    }
  `)

  const contentfulCMSPost = data.allContentfulRichContent.edges[0].node.pageText
  return (
    <Layout>
      <Seo
        title="Contact Us"
        description="We welcome enquiries from all involved in music or education"
      />
      <div className="contact-page">
        <div className="contact-page__text">
          <div className="contact-text">
            <h1>Contact Us</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </div>
          <div className="contact-image">
            <StaticImage
              src="../images/social-media-share.png"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="a group of people on mobiles communicating through social media"
            />
          </div>
        </div>

        <div className="contact-page__form">
          <form action="https://formspree.io/f/mgerbzwy" method="POST">
            <div className="form-input-container">
              <label htmlFor="formName">Your Name *</label>
              <input required type="text" name="name" id="formName" />
              <input type="text" name="_gotcha" style={{ display: "none" }} />
            </div>
            <div className="form-input-container">
              <label htmlFor="formEmail">Email Address *</label>
              <input required type="email" name="_replyto" id="formEmail" />
            </div>
            <div className="form-input-container">
              <label htmlFor="formTel">Phone Number</label>
              <input
                type="tel"
                name="phone-number"
                id="formTel"
                // pattern="[0-9]{11}"
                // maxlength="15"
                // title="Mobile or landline numbers only"
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="whoForm">Who Are You?</label>
              <div className="custom-select-container">
                <select name="who-are-you?" id="whoForm">
                  <option value="..."></option>
                  <option value="Band">Band</option>
                  <option value="Promoter">Promoter</option>
                  <option value="Manager">Manager</option>
                  <option value="Venue">Venue</option>
                  <option value="Other">Other</option>
                </select>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-chevron-down fa-w-14"
                >
                  <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="form-input-container">
              <label htmlFor="messageForm">Message *</label>
              <textarea required name="message" id="messageForm"></textarea>
            </div>
            <div className="form-submit-container">
              <div className="form-submit-container__btns">
                {/* <Recaptcha
                  sitekey={RECAPTCHA_SITE_KEY}
                  size="normal"
                  theme="light"
                  tabindex={0}
                  id="recaptcha-google"
                  onChange={() => setButtonDisabled(false)}
                  // callback={}
                  onExpired={() => setButtonDisabled(true)}
                  onErrored={() => setButtonDisabled(true)}
                /> */}
                <button type="submit">Send Message</button>
              </div>
              <div className="form-submit-container__required">
                <p>* Required</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
