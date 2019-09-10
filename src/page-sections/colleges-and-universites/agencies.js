import React from "react"
import "../../styles/index.scss"

/* components */
import Accordion from "../../components/accordion/accordion"
import StoryHeading from "../../components/section-elements/story-heading/story-heading"
import SearchPanel from "../../components/chartpanels/search"
import Downloads from "../../components/section-elements/downloads/downloads"
import defaultImage from "../../images/default-image.jpg"
// import BubbleChart from "../../components/visualizations/bubble-chart/bubble-chart"

  const Agencies = (props) => {

    const defaultImageStyle = {
      margin: "1rem 0"
    }

    const searchList = {
      'Education': ['Adult Education - Basic Grants to States', '1890 Institution Capacity Building Grants'],
      'Medical R&D': ['Epidemiology and Other Health Studies Financial Assistance Program']
    }
  
    const switchView = (view) => alert('switch to ' + view + ' mode');

    return (
      <>
        <StoryHeading
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

        {/*<BubbleChart/>*/}
        <div className="container" style={defaultImageStyle}>
          <div className="row center-xs">
          <SearchPanel chart="Agencies" searchList={searchList} switchView={switchView} />
          <img className="col-xs-6" src={defaultImage} />
          </div>
        </div>

        <Downloads
          href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
          date={'March 2019'}
        />
      </>
    )
}

export default Agencies



