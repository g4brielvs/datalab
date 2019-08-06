import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import AnalysesLayout from "../layouts/analyses/analyses"
import "../styles/index.scss"

/* components */
import Header from "../components/page-parts/header/header"
import Accordion from "../components/page-parts/accordion/accordion"
import SectionHeading from "../components/page-parts/section/section-heading/section-heading"
import Downloads from "../components/page-parts/section/downloads/downloads"

const CollegesAndUniversitiesPage = () => (
  <AnalysesLayout>
    <SEO title="Colleges and Universities" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      subtext={'Federal Investment in Higher Education'}
      subblurb={['Explore the Federal Investment in your ',<br/>, <span className={'header--red'}>Alma Mater</span>]}
      blurb={['Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?', <br/>,
        'Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students.']}
      />


    <SectionHeading
      number={'01'}
      title={'Investment Overview'}
      teaser={['How much was ', <span className="heading--red">invested in colleges and universities?</span>] }
      blurb={`In 2018, higher education institutions received a total of $1.068 trillion in revenue from federal and
                non-federal funding sources. Investments from the federal government were $149 billion of the total,
                representing 3.6% of federal spending. This money flowed into colleges and universities through three
                main vehicles: federal student aid, grants, and contracts. In our analysis we focused on data from
                nonprofit institutions that offer a program of two years or more.`}
    />

    <Accordion
      title="Accordion Title">
      <p>I am an accordion with lots to say.</p>
      <p>I have several paragraphs...</p>
      <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
    </Accordion>
    {/* is this the only way to add a comment? */}
    {/* add a section and then a viz, start with the investment overview i guess */}
    <Downloads
      href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
      date={'March 2019'}/>
  </AnalysesLayout>
)

export default CollegesAndUniversitiesPage