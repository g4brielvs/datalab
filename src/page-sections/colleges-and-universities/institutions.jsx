import React from 'react';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../styles/index.scss';
import storyHeadingStyles from '../../components/section-elements/story-heading/story-heading.module.scss';
import styles from './cu.module.scss';

import Accordion from '../../components/accordion/accordion';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import Downloads from '../../components/section-elements/downloads/downloads';
import GeoDataMapbox from '../../../static/unstructured-data/mapbox/mapData.json';
import dataTableData from '../../../static/unstructured-data/mapbox/tableData.csv';
import Share from '../../components/share/share';
import ControlBar from '../../components/control-bar/control-bar';
import { Hidden } from '@material-ui/core';
import DataTable from '../../components/table/data-table';
import Grid from '@material-ui/core/Grid';
import VizDetails from '../../components/chartpanels/viz-detail';
import VizControlPanel from '../../components/chartpanels/viz-control';
import GeolocationIcon from '../../images/colleges-and-universities/geolocation.svg';

import loadable from '@loadable/component';
const Mapbox = loadable(() => import('../../components/visualizations/mapbox/mapbox'));

export default function Institutions(props) {

  const [clickedSchool, setSchool] = useState(null);
  let searchList = GeoDataMapbox.features.map(school => ({
    id: school.id,
    heading: school.properties.Recipient,
    subheading: school.properties.INST_TYPE_1
  }));

  function filterByClicked(clicked) {
    let filteredList = GeoDataMapbox.features.filter(x => x.id == clicked);
    setSchool(filteredList);
    return filteredList;
  };

  // check required data properties/format to fail 'gracefully'
  if (!GeoDataMapbox.features
    || !Array.isArray(GeoDataMapbox.features)
    || !GeoDataMapbox.features[0].id
    || !GeoDataMapbox.features[0].properties
    || !GeoDataMapbox.features[0].properties.Recipient
  ) {
    return <div>Cannot display this information; error in data file format.</div>;
  };

  if (!GeoDataMapbox.features[0].properties.schoolId) {
    GeoDataMapbox.features.forEach(d => {
      d.properties.schoolId = d.id; // add school ID to properties until source file includes it
    });
  };

  const panelDetails = useStaticQuery(graphql`
    query {
      investments: allTop5InvestmentsPerSchoolV3Csv {
        nodes {
          source
          target
          value
        }
      }
      agencies: allTop5AgenciesPerSchoolV3Csv {
        nodes {
          source
          target
          value
        }
      }
    }
  `);

  let schoolDetails = {};
  const getClickedDetails = id => {
    const schoolProperties = GeoDataMapbox.features.find(s => s.id === id).properties;
    const institutionName = schoolProperties.Recipient;
    const studentAid = dataTableData.find(s => s.Recipient === institutionName).student_aid;

    const invTop5 = {};
    panelDetails.investments.nodes
      .filter(node => node.source === institutionName)
      .forEach(row => { invTop5[row.target] = row.value; })
      ;

    const agencyTop5 = {};
    panelDetails.agencies.nodes
      .filter(node => node.source === institutionName)
      .forEach(row => { agencyTop5[row.target] = row.value; })
      ;

    schoolDetails = {
      'header': {
        'title': 'Institution',
        'itemName': institutionName,
        'label': schoolProperties.INST_TYPE_1 + schoolProperties.INST_TYPE_2,
        'subItemName': null,
        'totalLabel': 'Total $ Received',
        'totalValue': schoolProperties.Total_Federal_Investment
      },
      'tables': [
        {
          'col1Title': 'Funding Instrument Type',
          'rows': {
            'Contracts': schoolProperties.contracts_received,
            'Grants': schoolProperties.grants_received,
            '   Grants (Research)': schoolProperties.research_grants_received,
            'Student Aid ': studentAid
          }
        },
        {
          'col1Title': <>Investment Categories <div className={styles.top5Div}>(Top 5)</div></>,
          'col2Title': 'Total Investment',
          'rows': invTop5
        },
        {
          'col1Title': <>Funding Agencies <div className={styles.top5Div}>(Top 5)</div></>,
          'col2Title': 'Total Investment',
          'rows': agencyTop5
        }
      ]
    };
    detailPanelRef.current.updateDetails(schoolDetails);
  };

  const detailPanelRef = React.createRef();

  const tableColumnTitles = [{ title: 'Institution' }, { title: 'Type' }, { title: 'Contracts' }, { title: 'Grants' }, { title: 'Student Aid' }, { title: 'Total $ Received' }];

  return (<>
    <StoryHeading
      number={'02'}
      title={'My Alma Mater'}
      teaser={['Find how much your Alma Mater ', <span className={storyHeadingStyles.headingRed}>received in federal funds.</span>]}
      blurb={`The federal government may have invested in your college or university, whether it is public, private, four year, or two year. Use the map below to uncover the amount and type of investment for individual schools. Click on a regional cluster to expand the area and see the schools in that area. `}
    />

    <Accordion title='Instructions'>
      <p>Click the map to get started</p>
      <p>The number displayed on each cluster is the number of institutions in that area</p>
      <p>Click on a regional cluster to expand the area and display details for each school</p>
      <p>Use the zoom in and zoom out keys to adjust the map view</p>
      <p>For a specific search, use the search tool to type in the school by name</p>
    </Accordion>

    <Grid container>
      <Grid item xs={12}>
        <ControlBar>
          <Share
            location={props.location}
            title='Check out this analysis on Data Lab'
            text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!'
            twitter='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending'
          />
        </ControlBar>
        <div>
          <VizControlPanel
            searchList={searchList}
            listDescription='Institutions'
            onSelect={filterByClicked}
            switchView={filterByClicked}
          >
            <img src={GeolocationIcon} />
          </VizControlPanel>
          <Mapbox
            data={GeoDataMapbox}
            showDetails={getClickedDetails}
            clickedSchool={clickedSchool}
          />
          {/* <DataTable */}
          {/*   data={dataTableData.map(x => { */}
          {/*     return [ */}
          {/*       x.Recipient, */}
          {/*       x.INST_TYPE_1 + ' / ' + x.INST_TYPE_2, */}
          {/*       parseInt(x.contracts), */}
          {/*       parseInt( x.grants), */}
          {/*       parseInt(x.student_aid), */}
          {/*       parseInt(x.Total_Federal_Investment), */}
          {/*     ]; */}
          {/*   })} */}
          {/*   columnTitles={tableColumnTitles} */}
          {/*   display={false} // for now, left panel for map isn't finished. */}
          {/*   idName={'institutionsTable'} */}
          {/* /> */}
        </div>
      </Grid>

      <Grid item>
        <VizDetails
          showDetails={getClickedDetails}
          details={schoolDetails}
          ref={detailPanelRef}
        />
      </Grid>
    </Grid>
    <Downloads
      href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
      date={'March 2019'}
    />
  </>);
};
