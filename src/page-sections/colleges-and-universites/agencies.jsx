// import '../../styles/index.scss';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Accordion from '../../components/accordion/accordion';
import BubbleChart from '../../components/visualizations/bubble-chart/bubble-chart';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import Downloads from '../../components/section-elements/downloads/downloads';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import SearchPanel from '../../components/chartpanels/search';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import VizControlPanel from '../../components/chartpanels/viz-control';
import VizDetails from '../../components/chartpanels/viz-detail';

const Agencies = () => {
  const _data = useStaticQuery(graphql`
    query {
      allUnivBubbleChartCsv {
        nodes {
          id
          agency
          subagency
          obligation
        }
      }
      allAgenciesRhpSummaryCsv {
        nodes {
          subagency
          type
          obligation
        }
      }
      allTop5InvestmentsPerAgencyV2Csv {
        nodes {
          source
          target
          value
        }
      }
      allTop5InstitutionsPerAgencyV2Csv {
        nodes {
          source
          target
          value
        }
      }
    }
  `);

  const switchView = view => alert('switch to ' + view + ' mode');

  const detailPanelRef = React.createRef();
  let currentDetails = {};
  const getClickedDetails = d => {
    if (!d) {
      detailPanelRef.current.closeDetails();
    } else {
      const summary = _data.allAgenciesRhpSummaryCsv.nodes.filter(i => i.subagency === d.name);
      const summaryObligations = {};
      if (summary[0].type === 'grant') {
        parseInt(summaryObligations.grant = summary[0].obligation);
        parseInt(summaryObligations.contract = summary[1].obligation);
      } else {
        parseInt(summaryObligations.grant = summary[1].obligation);
        parseInt(summaryObligations.contract = summary[0].obligation);
      }

      const invTop5 = {};
      _data.allTop5InvestmentsPerAgencyV2Csv.nodes
        .filter(i => i.source === d.name)
        .forEach(j => {
          invTop5[j.target] = j.value;
        })
        ;

      const instTop5 = {};
      _data.allTop5InstitutionsPerAgencyV2Csv.nodes
        .filter(i => i.source === d.name)
        .forEach(j => {
          instTop5[j.target] = j.value;
        })
        ;

      currentDetails = {
        'header': {
          'title': 'Agency',
          'itemName': d.parent.name,
          'label': 'Sub-Agency',
          'subItemName': d.name,
          'totalLabel': 'Total $ of Awards',
          'totalValue': d.size
        },
        'tables': [
          {
            'col1Title': 'Funding Instrument Type',
            'col2Title': null,
            'rows': {
              'Grants': summaryObligations.grant,
              'Contracts': summaryObligations.contract
            }
          },
          {
            'col1Title': 'Investment Categories' + (Object.keys(invTop5).length > 4 ? ' (Top 5)' : ''),
            'col2Title': 'Total Investment',
            'rows': invTop5
          },
          {
            'col1Title': 'Institutions' + (Object.keys(instTop5).length > 4 ? ' (Top 5)' : ''),
            'col2Title': 'Total Investment',
            'rows': instTop5
          }
        ]
      }
      detailPanelRef.current.updateDetails(currentDetails);
    }
  }

  const searchList = _data.allUnivBubbleChartCsv.nodes.map(n => {
    return {
      id: n.id,
      heading: n.agency,
      subheading: n.subagency
    }
  });

  const controlPanelRef = React.createRef();
  const searchItemSelected = id => {
    controlPanelRef.current.bubbleClick(searchList.filter(i => i.id === id));
  }

  return (<>
    <StoryHeading
      number={'02'}
      title={'xxxx'}
      teaser={['xxxxx']}
      blurb={`In 2018, higher education institutions received a total of xxxxx`}
    />

    <Hidden lgUp>
      <SearchPanel
        searchList={searchList}
        listDescription='Agencies'
        showCollapse
        onSelect={searchItemSelected}
      />
    </Hidden>

    <Accordion title='Accordion Title'>
      <p>I am an accordion with lots to say.</p>
      <p>I have several paragraphs...</p>
      <a href='https://datalab.usaspending.gov'>...and a link to the Data Lab</a>
    </Accordion>

    <Grid container justify='center'>
      <Grid item>
        <Hidden mdDown>
          <VizControlPanel
            searchList={searchList}
            listDescription='Agencies'
            onSelect={searchItemSelected}
            switchView={switchView}
          >
            <BubbleChartOutlinedIcon />
          </VizControlPanel>
        </Hidden>
      </Grid>
      <Grid item>
        <BubbleChart
          items={_data.allUnivBubbleChartCsv.nodes}
          showDetails={getClickedDetails}
          ref={controlPanelRef}
        />
      </Grid>
      <Grid item>
        <VizDetails
          showDetails={getClickedDetails}
          details={currentDetails}
          ref={detailPanelRef}
        />
      </Grid>
    </Grid>

    <Downloads
      href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
      date={'March 2019'}
    />
  </>)
}

export default Agencies
