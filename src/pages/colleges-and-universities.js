import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import AnalysesLayout from "../layouts/analyses/analyses"
import "../styles/index.scss"

/* components */
import Header from "../components/page-parts/header/header"
import Toc from "../components/page-parts/toc/toc"
import Accordion from "../components/page-parts/accordion/accordion"

const CollegesAndUniversitiesPage = () => (
  <AnalysesLayout>
    <SEO title="Colleges and Universities" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      subtext={"Federal Investment in Higher Education"}
      subblurb={["Explore the Federal Investment in your ",<br/>, <span className={'header--red'}>Alma Mater</span>]}
      blurb={["Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?", <br/>,
        "Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students."]}
      />
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