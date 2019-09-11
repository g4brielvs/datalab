import React from "react";
import "../../styles/index.scss";
import '../../components/share-menu/share-menu.scss';

/* components */
import InvestmentOverview from '../../components/visualizations/investment-overview/overview.js';
import Accordion from "../../components/accordion/accordion";
import StoryHeading from "../../components/section-elements/story-heading/story-heading";
import Downloads from "../../components/section-elements/downloads/downloads";
import defaultImage from "../../images/default-image.jpg";
import ShareMenu from '../../components/share-menu/share-menu';


const Overview = () => {
  const defaultImageStyle = {
    marginBottom: "1rem"
  };

  return (
    <>
      <StoryHeading
        number={'01'}
        title={'Investment Overview'}
        teaser={['How much was ', <span key='teaser-callout' className='heading--red'>invested in colleges and universities?</span>] }
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


      <div className="container">
      <ShareMenu siteUrl='https://datalab-dev.usaspending.gov/' pageUrl='colleges-and-universities' 
				twitter='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending' 
				facebook='' reddit='' linkedin='' tumblr='' email=''/>

        <div className="row center-xs">
          <InvestmentOverview/>
        </div>
      </div>

      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>

  )
}


export default Overview

