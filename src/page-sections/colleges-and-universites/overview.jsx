import '../../styles/index.scss';
import '../../components/share-menu/share-menu.scss';
import React from 'react';

import Downloads from '../../components/section-elements/downloads/downloads';
import InvestmentOverview from '../../components/visualizations/investment-overview/overview.js';
import ShareMenu from '../../components/share-menu/share-menu';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import ControlBar from "../../components/control-bar/control-bar"

const Overview = (props) => {
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

      <ControlBar>
        <ShareMenu siteUrl='https://datalab-dev.usaspending.gov/' pageUrl='colleges-and-universities'
                   location={props.location}
                   title='Check out this analysis on Data Lab'
                   text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending'
                   facebook='' reddit='' linkedin='' tumblr='' email=''/>
      </ControlBar>

      <section id='investment-overview'>
        <InvestmentOverview/>
      </section>

      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>
  );
};


export default Overview;

