import React from "react"
import "../../styles/index.scss"

/* components */
import StoryHeading from "../../components/section-elements/story-heading/story-heading"
import Accordion from "../../components/accordion/accordion"
import SearchPanel from "../../components/chartpanels/search"
import VizControlPanel from "../../components/chartpanels/viz-control"
import VizDetails from "../../components/chartpanels/viz-detail"
import Downloads from "../../components/section-elements/downloads/downloads"
import defaultImage from "../../images/default-image.jpg"
import SunburstIcon from '../../images/sunburst_icon.svg';


const Categories = () => {
  const defaultImageStyle = {
    margin: "1rem 0"
  }

  const searchList = [
    {
      id: 1,
      text: 'R&D'
    }, {
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
          text: 'Human Genome Research'
        }
      ]
    }
  ];

  const switchView = view => alert('switch to ' + view + ' mode');

  const searchSelected = id => {
    let choice;
    searchList.some(parent => {
      if (parent.id === id) {
        choice = parent;
        return true;
      } else {
        if (parent.children) {
          parent.children.some(child => {
            if (child.id === id) {
              choice = child;
              return true;
            }
          });
        }
      }
    });
    alert(JSON.stringify(choice));
  }

  return (
    <>
      <StoryHeading
        number={'03'}
        title={'Investment Categories'}
        teaser={'How was the money used?'}
        blurb={`Now that we know how much money was invested in higher education, are you curious to know how the money was used? This visualization allows you to discover the various categories the government uses to classify funding. Note: Product and Service Codes (PSCs) are used to categorize contract purchases of products and services and Federal Assistance Listings are used to categorize grant funding.`}
      />

      <SearchPanel
        searchList={searchList}
        listDescription="Categories"
        showCollapse
        onSelect={searchSelected}
      />

      <Accordion
        title="Accordion Title">
        <p>I am an accordion with lots to say.</p>
        <p>I have several paragraphs...</p>
        <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
      </Accordion>

      <div className="container" style={defaultImageStyle}>
        <div className="row center-xs">
          <VizControlPanel
            searchList={searchList}
            listDescription="Categories"
            onSelect={searchSelected}
            switchView={switchView}
          >
            <img src={SunburstIcon} />
          </VizControlPanel>
          <img className="col-xs-6" src={defaultImage} />
          <VizDetails
          >
            Just checking...
          </VizDetails>
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
