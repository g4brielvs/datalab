import React from "react"
import "../../styles/index.scss"

/* components */
import Accordion from "../../components/accordion/accordion"
import Heading from "../../components/section/heading/heading"
import Downloads from "../../components/section/downloads/downloads"

const Agencies = () => (
  <>
    <Heading
      number={'02'}
      title={'xxxx'}
      teaser={['xxxxx'] }
      blurb={`In 2018, higher education institutions received a total of xxxxx`}
    />

    <Accordion
      title="Accordion Title">
      <p>I am an accordion with lots to say.</p>
      <p>I have several paragraphs...</p>
      <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
    </Accordion>

    <Downloads
      href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
      date={'March 2019'}
    />
  </>

)


export default Agencies

