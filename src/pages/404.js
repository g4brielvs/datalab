import React from "react"

import Home from "../layouts/home/home"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Home>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Home>
)

export default NotFoundPage
