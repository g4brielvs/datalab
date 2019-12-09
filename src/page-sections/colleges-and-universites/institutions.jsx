import React, { useState } from "react";
import "../../styles/index.scss";
import storyHeadingStyles from '../../components/section-elements/story-heading/story-heading.module.scss';

import Accordion from "../../components/accordion/accordion";
import StoryHeading from "../../components/section-elements/story-heading/story-heading";
import Downloads from "../../components/section-elements/downloads/downloads";
import GeoDataMapbox from '../../unstructured-data/mapbox/mapData.json';
import dataTableData from '../../unstructured-data/mapbox/tableData.csv';
import Share from '../../components/share/share';
import ControlBar from "../../components/control-bar/control-bar";
import DataTable from "../../components/chartpanels/data-table";
import formatNumber from "../../utils/number-formatter";

import loadable from '@loadable/component';
const Mapbox = loadable(() => import('../../components/visualizations/mapbox/mapbox'));

const Institutions = (props) => {

  const tableColumnTitles = ['Institution', 'Type', 'Contracts', 'Grants', 'Student Aid', 'Total $ Received'];

  return (
    <>
      <StoryHeading
        number={'02'}
        title={'My Alma Mater'}
        teaser={['Find how much your Alma Mater ', <span className={storyHeadingStyles.headingRed}>received in federal funds.</span>] }
        blurb={`The federal government may have invested in your college or university, whether it is public, private, four year, or two year. Use the map below to uncover the amount and type of investment for individual schools. Click on a regional cluster to expand the area and see the schools in that area. `}
      />

      <Accordion
        title="Instructions">
        <p>Click the map to get started</p>
        <p>The number displayed on each cluster is the number of institutions in that area</p>
        <p>Click on a regional cluster to expand the area and display details for each school</p>
        <p>Use the zoom in and zoom out keys to adjust the map view</p>
        <p>For a specific search, use the search tool to type in the school by name</p>
      </Accordion>

      <ControlBar>
        <Share location={props.location}
                   title='Check out this analysis on Data Lab'
                   text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!'
                   twitter='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending'
                   />
      </ControlBar>
      <div>
	<Mapbox data={GeoDataMapbox}/>
        <DataTable
          data={dataTableData.map(x => {
            return [
              x.Recipient,
              x.INST_TYPE_1 + ' / ' + x.INST_TYPE_2,
              formatNumber('dollars', x.contracts),
              formatNumber('dollars', x.grants),
              formatNumber('dollars', x.student_aid),
              formatNumber('dollars', x.Total_Federal_Investment),
            ];
          })}
          columnTitles={tableColumnTitles}
          display={true} // for now, left panel for map isn't finished.
        />
      </div>
      
      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>

  );
};


export default Institutions;

