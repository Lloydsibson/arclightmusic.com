import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* REMOVE IN PRODUCTION - HIDES PAGE FROM WEB CRAWLERS */}
        <meta name="robots" content="noindex" />
        {/* ---------------------------------------------------- */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://assets.juicer.io/embed.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div className="loading-screen">
          <div className="loader loader-6"></div>
        </div>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="https://w.appzi.io/w.js?token=e4JWH"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
