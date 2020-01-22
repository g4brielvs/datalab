import React from 'react';

import ControlBar from '../../components/control-bar/control-bar';
import DTS from '../../components/visualizations/dts/dts';
import DTSHWCTA from './methodologies';
import Grid from '@material-ui/core/Grid';
import SEO from '../../components/seo';
import Share from '../../components/share/share';
import ToolLayout from '../../components/layouts/tool/tool';
import * as d3 from 'd3v4';
export default class DTSPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dtsData: null
    };
  }

  componentDidMount() {
    d3.csv('/data-lab-data/dts/dts.csv', dataArray => {
      this.setState({ dtsData: dataArray });
    });
  }
  
  render = () => <>
    <SEO title='Data Lab - Visualizing The Daily Treasury Statement - U.S. Treasury' keywords={[`application`, `demo`]} />

    <ToolLayout
      title='Visualizing The Daily Treasury Statement'
      introSentence='How much does the federal government spend each day?'
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <div className='dts-css'>
        <div className='dts-tt-container'>
          <div className='dts-tt-date'></div>
          <div className='dts-tt-hr-separator'></div>
          <div className='dts-tt-category'></div>
          <div className='dts-tt-timeframe dts-tt-timeframe-daily dts-tt-timeframe-active'>
            <span className='dts-tt-timeframe-label'>DAILY</span>
            <span className='dts-tt-daily-value'></span>
          </div>
          <div className='dts-tt-timeframe dts-tt-timeframe-mtd'>
            <span className='dts-tt-timeframe-label'>MTD</span>
            <span className='dts-tt-mtd-value'></span>
          </div>
          <div className='dts-tt-timeframe dts-tt-timeframe-fytd'>
            <span className='dts-tt-timeframe-label'>FYTD</span>
            <span className='dts-tt-fytd-value'></span>
          </div>
        </div>

        <div className='dts-container'>
          {/* <div className='header-title'>Visualizing The Daily Treasury Statement</div>
            <div className='header-subtitle'>How much does the federal government spend each day?</div> */}
          <div className='header-line-break'></div>
          <Grid container justify='space-between'>
            <Grid item xs={1} />
            <Grid item className='header-updated-when' />
            <Grid item xs={1}>
              <ControlBar>
                <Share location={this.props.location}
                  title='Check out this analysis on Data Lab'
                  text='Check out this site https://datalab.usaspending.gov/dts.html'
                />
              </ControlBar>
            </Grid>
          </Grid>

          <Grid container justify='space-between' wrap='nowrap' className='top-margin'>
            <Grid item>
              <div className='daily-spending-subtext'>Amount Spent On</div>
              <div className='daily-spending-amount'>$0</div>
            </Grid>
            <Grid item className='period-container'>
              <div className='period-button-header'>Chart Range</div>
              <div className='period-button-container'>
                <div className='period-button period-button-default' data-range='30d'>30D</div>
                <div className='period-button' data-range='90d'>90D</div>
                <div className='period-button' data-range='1y'>1Y</div>
                <div className='period-button' data-range='5y'>5Y</div>
                <div className='period-button' data-range='10y'>10Y</div>
              </div>
            </Grid>
            <Grid item>
              <label htmlFor="frequency-selector" className='frequency-selector-label'>Frequency</label>
              <select id='frequency-selector' className='custom-select'>
                <option value='today'>DAILY</option>
                <option value='mtd'>MTD</option>
                <option value='fytd'>FYTD</option>
              </select>
            </Grid>
            <Grid item>
              <label htmlFor="category-selector" className='category-select-label'>Categories</label>
              <select className='custom-select custom-select-start' id='category-selector'></select>
            </Grid>
          </Grid>

          <DTS data={this.state.dtsData} />

        </div>
      </div>
    </ToolLayout >
  </>;
};
