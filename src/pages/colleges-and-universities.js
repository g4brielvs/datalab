import React from "react"
import SEO from "../components/seo"

import AnalysesLayout from "../layouts/analyses/analyses"
import "../styles/index.scss"

/* components */
import Header from "../components/header/header"
import HWCTALink from "../components/hwcta-link/hwcta-link"
import Overview from "../sections/colleges-and-universites/overview"
import Agencies from "../sections/colleges-and-universites/agencies"
import MoreAnalyses from "../components/more-analyses/more-analyses"

const CollegesAndUniversitiesPage = () => (
  <AnalysesLayout>
    <SEO title="Colleges and Universities" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      subtext={'Federal Investment in Higher Education'}
      subblurb={['Explore the Federal Investment in your ',<br/>, <span className={'header--red'}>Alma Mater</span>]}
      blurb={['Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?', <br/>,
        'Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students.']}
      />

    <Overview/>

    <Agencies/>

    <HWCTALink
      href={"somepage"}
    />

    <MoreAnalyses/>

  </AnalysesLayout>
)

export default CollegesAndUniversitiesPage