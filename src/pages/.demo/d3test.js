import React from "react"
import Home from "../../layouts/home/home"
import SEO from "../../components/seo"

import Test from "../../components/.demo/test"


const TestPage = () => (
  <Home>
    <SEO title="D3 Test Page" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Test />
    </div>
  </Home>
)

export default TestPage
