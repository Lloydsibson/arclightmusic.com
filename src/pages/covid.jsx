import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Covid" />
    <h1>COVID PAGE</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quos
      perferendis ipsa culpa similique placeat, modi et vero consectetur
      excepturi voluptatem dolores nam quasi velit eos repellat error iste
      pariatur?
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
