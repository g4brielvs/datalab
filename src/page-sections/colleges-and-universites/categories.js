import React from "react"
import "../../styles/index.scss"

/* components */
import StoryHeading from "../../components/section-elements/story-heading/story-heading"
import Accordion from "../../components/accordion/accordion"
import SearchPanel from "../../components/chartpanels/search"
import Downloads from "../../components/section-elements/downloads/downloads"
import defaultImage from "../../images/default-image.jpg"

const Categories = () => {
  const defaultImageStyle = {
    margin: "1rem 0"
  }

  const searchList = {
    'Education': ['Adult Education - Basic Grants to States', '1890 Institution Capacity Building Grants'],
    'Medical R&D': ['Human Genome Research']
  }
  
  return (
    <>
      <StoryHeading
        number={'03'}
        title={'Investment Categories'}
        teaser={'How was the money used?'}
        blurb={`Now that we know how much money was invested in higher education, are you curious to know how the money was used? This visualization allows you to discover the various categories the government uses to classify funding. Note: Product and Service Codes (PSCs) are used to categorize contract purchases of products and services and Federal Assistance Listings are used to categorize grant funding.`}
      />

      <Accordion
        title="Accordion Title">
        <p>I am an accordion with lots to say.</p>
        <p>I have several paragraphs...</p>
        <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
      </Accordion>

      <div className="container" style={defaultImageStyle}>
        <div className="row center-xs">
          <SearchPanel search-list={searchList}/>
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


export default Categories

