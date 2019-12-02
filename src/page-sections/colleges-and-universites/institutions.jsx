import storyHeadingStyles from '../../components/section-elements/story-heading/story-heading.module.scss';
import React from 'react';

import Accordion from '../../components/accordion/accordion';
import ControlBar from '../../components/control-bar/control-bar'
import Downloads from '../../components/section-elements/downloads/downloads';
import GeoDataMapbox from '../../unstructured-data/mapbox/mapData.json';
import Grid from '@material-ui/core/Grid';
import Share from '../../components/share/share';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import VizDetails from '../../components/chartpanels/viz-detail';

import loadable from '@loadable/component';
const Mapbox = loadable(() => import('../../components/visualizations/mapbox/mapbox'));

const Institutions = (props) => {
  if (!GeoDataMapbox.features[0].properties.schoolId) {
    GeoDataMapbox.features.forEach(d => {
      d.properties.schoolId = d.id; // add school ID to properties until source file includes it
    });
  }

  // const panelDetails = useStaticQuery(graphql`
  //   query {
  //     detailsCsv {
  //       nodes {
  //         id
  //         Agency
  //         Obligation
  //         Program_Title
  //         Recipient
  //         Subagency
  //         family
  //       }
  //     }
  //     grants: allInvestmentSectionGrantsV2Csv {
  //       nodes {
  //         id
  //         Agency
  //         Obligation
  //         Program_Title
  //         Recipient
  //         Research
  //         Subagency
  //         family
  //       }
  //     }
  //     research: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
  //       nodes {
  //         id
  //         Agency
  //         Obligation
  //         Program_Title
  //         Recipient
  //         Research
  //         Subagency
  //         family
  //       }
  //     }
  //     top5Agencies: allTop5AgenciesPerInvestmentTypeV2Csv {
  //       nodes {
  //         source
  //         target
  //         value
  //       }
  //     }
  //     top5InvestmentTypes: allTop5InstitutionsPerInvestmentTypeV2Csv {
  //       nodes {
  //         source
  //         target
  //         value
  //       }
  //     }
  //     contractsSearch: allInvestmentSectionContractsV2Csv {
  //       group(field: Program_Title) {
  //         nodes {
  //           id
  //           family
  //           Program_Title
  //         }
  //       }
  //     }
  //     grantsSearch: allInvestmentSectionGrantsV2Csv {
  //       group(field: Program_Title) {
  //         nodes {
  //           id
  //           family
  //           Program_Title
  //         }
  //       }
  //     }
  //     researchSearch: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
  //       group(field: Program_Title) {
  //         nodes {
  //           id
  //           family
  //           Program_Title
  //         }
  //       }
  //     }
  //   }
  // `);

  let schoolDetails = {};
  const getClickedDetails = id => {
    let schoolProperties = GeoDataMapbox.features.find(s => s.id === id).properties;
    schoolDetails = {
      'header': {
        'title': 'Institution',
        'itemName': schoolProperties.Recipient,
        'label': schoolProperties.INST_TYPE_1 + schoolProperties.INST_TYPE_2,
        'subItemName': null,
        'totalLabel': 'Total $ Received',
        'totalValue': schoolProperties.Total_Federal_Investment
      },
      'tables': [
        // {
        //   'col1Title': 'Funding Instrument Type',
        //   'rows': agenciesTop5
        // },
        // {
        //   'col1Title': 'Investment Categories' + (Object.keys(invTop5).length > 5 ? ' (Top 5)' : ''),
        //   'col2Title': 'Total Investment',
        //   'rows': invTop5
        // },
        // {
        //   'col1Title': 'Funding Agencies ' + (Object.keys(invTop5).length > 5 ? ' (Top 5)' : ''),
        //   'col2Title': 'Total Investment',
        //   'rows': invTop5
        // }
      ]
    }
    detailPanelRef.current.updateDetails(schoolDetails);
  }

  const detailPanelRef = React.createRef();

  return (<>
    <StoryHeading
      number={'02'}
      title={'My Alma Mater'}
      teaser={['Find how much your Alma Mater ', <span className={storyHeadingStyles.headingRed}>received in federal funds.</span>]}
      blurb={`The federal government may have invested in your college or university, whether it is public, private, four year, or two year. Use the map below to uncover the amount and type of investment for individual schools. Click on a regional cluster to expand the area and see the schools in that area. `}
    />

    <Accordion title='Accordion Title'>
      <p>I am an accordion with lots to say.</p>
      <p>I have several paragraphs...</p>
      <p>I have several paragraphs...</p>
    </Accordion>

    <Grid container>
      <Grid item xs={12}>
        <ControlBar>
          <Share
            location={props.location}
            title='Check out this analysis on Data Lab'
            text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!'
            twitter='#DataLab #Treasury #DataTransparency #USAspending'
          />
        </ControlBar>
        <div>
          <Mapbox
            data={GeoDataMapbox}
            showDetails={getClickedDetails}
          />
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

export default Institutions;
