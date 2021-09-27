import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./404.scss"

import { StaticImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"

const NotFoundPage = () => {
  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <Seo
        title="404 Error"
        description="Page not found. Oops! Something went wrong"
      />
      <div className="fourOfour-page">
        <div className="fourOfour-page__inner-container">
          <div className="fourOfour-image">
            <StaticImage
              src="../images/404.png"
              width={600}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="venue stage"
            />
          </div>
          <div className="fourOfour-message">
            <h1>Page not found</h1>
            <p>...Oops! Something went wrong</p>
            <div className="fourOfour-message__btns">
              <button id="goback" onClick={() => goBackHandler()}>
                Go Back
              </button>
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
