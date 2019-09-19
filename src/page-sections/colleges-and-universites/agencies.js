import React from "react"
import "../../styles/index.scss"

/* components */
import Accordion from "../../components/accordion/accordion"
import StoryHeading from "../../components/section-elements/story-heading/story-heading"
import VizControlPanel from "../../components/chartpanels/viz-control-panel"
import Downloads from "../../components/section-elements/downloads/downloads"
import defaultImage from "../../images/default-image.jpg"
// import BubbleChart from "../../components/visualizations/bubble-chart/bubble-chart"
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';

const Agencies = (props) => {

  const defaultImageStyle = {
    margin: "1rem 0"
  }

  const searchList = [
    {
      id: 2,
      text: 'Education',
      children: [
        {
          id: 3,
          text: 'Adult Education - Basic Grants to States'
        }, {
          id: 4,
          text: '1890 Institution Capacity Building Grants'
        }
      ]
    }, {
      id: 5,
      text: 'Medical R&D',
      children: [
        {
          id: 6,
          text: 'Epidemiology and Other Health Studies Financial Assistance Program'
        }
      ]
    }
  ];

  const switchView = (view) => alert('switch to ' + view + ' mode');

  return (
    <>
      <StoryHeading
        number={'02'}
        title={'xxxx'}
        teaser={['xxxxx']}
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
          <VizControlPanel
            searchList={searchList}
            listDescription="Agencies"
            switchView={switchView}
          >
            <BubbleChartOutlinedIcon />
          </VizControlPanel>
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



