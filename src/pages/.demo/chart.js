import React from "react"
import Home from "../../layouts/home/home"
import SEO from "../../components/seo"
import Chart from "../../components/.demo/barChart"


const ChartPage = () => (
  <Home>
    <SEO title="Bar Chart Test" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Chart />
    </div>
  </Home>
)

export default ChartPage
