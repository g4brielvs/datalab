// import '../../styles/index.scss';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Accordion from '../../components/accordion/accordion';
import BubbleChart from '../../components/visualizations/bubble-chart/bubble-chart';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import Downloads from '../../components/section-elements/downloads/downloads';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import VizControlPanel from '../../components/chartpanels/viz-control';
import VizDetails from '../../components/chartpanels/viz-detail';


export default class Agencies extends React.Component {
  constructor(props) {
    super(props);
  }

  searchList = [
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

  details = {
    'header': {
      'title': 'Institution',
      'itemName': 'Central College',
      'label': 'Public, 2-year',
      'subItemName': null,
      'totalLabel': 'Total $ Received',
      'totalValue': 1100000
    },
    'tables': [
      {
        'col1Title': 'Funding Investment Type',
        'col2Title': null,
        'rows': {
          'Contracts': 35000,
          'Grants': 590200,
          '   Grants (Research)': 0
        }
      },
      {
        'col1Title': 'Institution (Top 5)',
        'col2Title': 'Total Investment',
        'rows': {
          'UNLV': 35000,
          'Baker College': 590200,
          'Massachusetts General Hospital Dietetic Intership': 6954359235967253
        }
      }
    ]
  };

  switchView = view => alert('switch to ' + view + ' mode');

  showDetails = () => this.setState({ detailShowing: true });

  _data = useStaticQuery(graphql`
  query {
    allUnivBubbleChartCsv {
      nodes {
        agency
        subagency
        obligation
      }
    }
  }
`);

  render() {
    return (<>
      <StoryHeading
        number={'02'}
        title={'xxxx'}
        teaser={['xxxxx']}
        blurb={`In 2018, higher education institutions received a total of xxxxx`}
      />

      <Accordion
        title='Accordion Title'>
        <p>I am an accordion with lots to say.</p>
        <p>I have several paragraphs...</p>
        <a href='https://datalab.usaspending.gov'>...and a link to the Data Lab</a>
      </Accordion>


      <div className='container'>
        <div className='row center-xs'>
          <VizControlPanel
            searchList={this.searchList}
            listDescription='Agencies'
            switchView={this.switchView}
          >
            <BubbleChartOutlinedIcon />
          </VizControlPanel>
          {/*<img className='col-xs-6' src={defaultImage}*/}
          {/*onClick={() => showDetails()}*/}
          {/*/>*/}
          <VizDetails
            showDetails={click => showDetails = click}
            data={this.details}
          >
          </VizDetails>
          <BubbleChart items={this._data.allUnivBubbleChartCsv.nodes} />
        </div>
      </div>

      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>)
  }

}
