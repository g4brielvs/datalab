import React from "react"
import "../../styles/index.scss"
import '../../components/share-menu/share-menu.scss'

/* components */
import Accordion from "../../components/accordion/accordion"
import defaultImage from "../../images/default-image.jpg"
import Reset from "../../components/reset/reset"
import ControlBar from "../../components/control-bar/control-bar"
import Share from "../../components/share/share"
import Downloads from "../../components/section-elements/downloads/downloads"

function Who() {

  const defaultImageStyle = {
    marginBottom: "1rem"
  };

  return (
    <>

      <h2>Spending by Agency</h2>
      {/*Using the components below as just a temporary placeholder for visualizations, etc.*/}
      <Accordion
        title="Instructions">
        <p>I am an accordion with lots to say.</p>
        <p>I have several paragraphs...</p>
        <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
      </Accordion>
      <ControlBar>
        <Reset />
        <Share siteUrl='https://datalab-dev.usaspending.gov/' pageUrl='federal-employees'
                   twitter='#DataLab #Treasury #DataTransparency #USAspending'
                   facebook='' reddit='' linkedin='' tumblr='' email=''/>
      </ControlBar>

      <div style={defaultImageStyle}><img src={defaultImage} alt="visualization"/></div>
      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>
  )
}

export default Who

