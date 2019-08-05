import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import AnalysesLayout from "../layouts/analyses/analyses"
import "../styles/index.scss"

/* components */
import Header from "../components/header/header"
import Toc from "../components/toc/toc"
import Accordion from "../components/accordion/accordion"

const CollegesAndUniversitiesPage = () => (
  <AnalysesLayout>
    <SEO title="Colleges and Universities" keywords={[`gatsby`, `application`, `react`]} />
    <Header/>
    {/*<Toc/>*/}
    <Accordion
      title="Accordion Title">
      <p>I am an accordion with lots to say.</p>
      <p>I have several paragraphs...</p>
      <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
    </Accordion>
    {/* is this the only way to add a comment? */}
    {/* add a section and then a viz, start with the investment overview i guess */}
  </AnalysesLayout>
)

export default CollegesAndUniversitiesPage