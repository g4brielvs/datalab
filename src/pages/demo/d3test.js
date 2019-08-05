import React from "react"
import Layout from "../../layouts/default/layout"
import SEO from "../../components/seo"

import Test from "../../components/demo/test"


const TestPage = () => (
  <Layout>
    <SEO title="D3 Test Page" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Test />
    </div>
  </Layout>
)

export default TestPage
