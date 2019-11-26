import { graphql } from "gatsby";
import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";
import competitionStyles from './competition-in-contracting.module.scss';

import { Grid, Hidden } from "@material-ui/core";
/* components */
import Accordion from "../../components/accordion/accordion";
import Barchart from '../../components/visualizations/horizontal-barchart/barchart';
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share"
import ToolLayout from "../../components/layouts/tool/tool";
import * as d3 from "d3v3"
import numberFormatter from "../../utils/number-formatter"
import ControlBar from "../../components/control-bar/control-bar"

class CompetitionInContractingPage extends Component {
  constructor (props) {
    super(props);
    this.rawData = props.data.allCicDataJson.nodes;
    this.state = {
      scale: 'quantity',
      data: JSON.parse(JSON.stringify(this.rawData)),
      unit: 'dollars'
    }
    this.setScaleFn = this.setScaleFn.bind(this);
    this.setUnitFn = this.setUnitFn.bind(this);
    this.drawSummaryTableModule = this.drawSummaryTableModule.bind(this);
    this.resetFn = this.resetFn.bind(this);
    this.handleYAxisCheckboxChange = this.handleYAxisCheckboxChange.bind(this);
  }

  setScaleFn(e){
    this.setState({scale: e.currentTarget.value});
  }

  setUnitFn(e){
    this.setState({unit: e.currentTarget.value});
  }

  resetFn(){
    this.setState({scale: 'quantity'});
    this.setState({unit: 'dollars'});
    this.setState({data: JSON.parse(JSON.stringify(this.rawData))});
  }

  drawSummaryTableModule(){

    const summaryData = this.state.data.reduce(
      (a, c) => {
        if (c.displayed) {
          a.competedDollars += c.competedDollars;
          a.notCompetedDollars += c.notCompetedDollars;
          a.competedActions += c.competedActions;
          a.notCompetedActions += c.notCompetedActions;
        }
        return a;
      },
      {
        competedDollars: 0,
        notCompetedDollars: 0,
        competedActions: 0,
        notCompetedActions: 0
      }
    );

    d3
      .select("#" + competitionStyles.competedDollars)
      .text(numberFormatter("dollars text", summaryData.competedDollars));

    d3
      .select("#" + competitionStyles.competedActions)
      .text(numberFormatter("actions", summaryData.competedActions));

    d3
      .select("#" + competitionStyles.notCompetedDollars)
      .text(numberFormatter("dollars text", summaryData.notCompetedDollars));

    d3
      .select("#" + competitionStyles.notCompetedActions)
      .text(numberFormatter("actions", summaryData.notCompetedActions));
  }

  handleYAxisCheckboxChange(id, checked) {
    const adjustedData = this.state.data.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          displayed: checked
        };
      }
      return c;
    });
    this.setState({data: adjustedData});
  }


  render() {
    const pageTitle = 'Competition in Contracting';
    const introSentence = 'In FY 2017, over 60 percent of federal contracts were competitively awarded.';
    const contextSentence = 'How often do federal agencies compete for contracts? In FY 2017 more than 60% of federal contracts were competitively awarded.';
    const sectionTitle = 'Why does the government use competition when awarding contracts?';
    const sectionText = '<p>Competition is a healthy component of maintaining the integrity of the federal procurement process.  '
      + 'Competition generates better quality and lower costs for goods and services purchased in support of agency services to the American taxpayer.</p>'
      + '\t\t\t\t<p>The 1984 Competition in Contracting Act requires full and open competition while also allowing for exceptions in certain situations. '
      + 'In many cases, federal agencies will pursue competition even when an exception to the law applies, as competition may help to provide innovative '
      + 'solutions or better prices.</p>';
    const shareText = 'Data Lab – Competition in Contracting – U.S. Treasury ';

    return (<>
        <ToolLayout title={pageTitle}
                    introSentence={introSentence}
                    contextStatement={contextSentence}
                    sectionTitle={sectionTitle}
                    sectionText={sectionText}
                    hwctaLink={this.props.location.pathname + '/methodologies'}>
          <SEO title="Competition in Contracting" keywords={[`gatsby`, `application`, `react`]}/>
          <Accordion
            title="Instructions">
            <ul>
              <li>Click the toggle to switch between raw numbers and percent for each agency</li>
              <li>Click the toggle to switch between total dollars obligated and the number of contracting actions</li>
              <li>Click the check box beside each agency to remove or add it to the visualization and re-scale the
                horizontal axis.
              </li>
            </ul>
          </Accordion>
          <ControlBar>
            <Reset _resetClick={this.resetFn}/>
            <Share location={this.props.location}
                            title={shareText}/>
          </ControlBar>

          <div className={competitionStyles.vizContainer}>
            <Grid container className={competitionStyles.container}>

              <Grid alignItems='stretch' container id={competitionStyles.summary}>
                <div id={competitionStyles.tooltip}></div>

                <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
                  <Grid container alignItems='flex-end'>
                    <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>$ COMPETED</Grid>
                    <Grid item xs={12} id={competitionStyles.competedDollars}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3} lg={3} className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparator}`}>
                  <Grid container alignItems='flex-end'>
                    <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>ACTIONS COMPETED</Grid>
                    <Grid item xs={12} id={competitionStyles.competedActions}></Grid>
                  </Grid>
                </Grid>
                <Hidden mdDown>
                  <Grid item lg={1} className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparatorLg}`}></Grid>
                  <Grid item lg={1} className={competitionStyles.summaryItem}></Grid>
                </Hidden>
                <Grid item xs={6} md={3} lg={3} className={competitionStyles.summaryItem}>
                  <Grid container alignItems='flex-end'>
                    <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>$ NOT COMPETED</Grid>
                    <Grid item xs={12} id={competitionStyles.notCompetedDollars}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
                  <Grid container alignItems='flex-end'>
                    <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>ACTIONS NOT COMPETED</Grid>
                    <Grid item xs={12} id={competitionStyles.notCompetedActions}></Grid>
                  </Grid>
                </Grid>
              </Grid>

              <div>
                <div className={competitionStyles.legend} id={competitionStyles.notCompeted}>
                  <svg height="15" width="15">
                    <circle cx="7.5" cy="7.5" r="7.5"/>
                  </svg>
                  <label htmlFor="notCompeted" style={{ fontSize: '12px', verticalAlign: 'bottom' }}>Not
                    Competed</label>
                </div>
                <div className={competitionStyles.legend} id={competitionStyles.competed}>
                  <svg height="15" width="15">
                    <circle cx="7.5" cy="7.5" r="7.5"/>
                  </svg>
                  <label htmlFor="contactChoice1" style={{ fontSize: '12px', verticalAlign: 'bottom' }}>Competed</label>
                </div>
                <form className={competitionStyles.barChartToolbar}>
                  <div className={competitionStyles.selectWrapper1}>
                    <input type="radio"
                           id="contactChoice1"
                           name="xAxisScale"
                           value="quantity"
                           onChange={this.setScaleFn}
                           checked={this.state.scale === 'quantity'}
                    />
                    <label htmlFor="contactChoice1" style={{ fontSize: '12px' }}>Quantity</label>

                    <input type="radio"
                           id="contactChoice2"
                           name="xAxisScale"
                           value="percent"
                           onChange={this.setScaleFn}
                           checked={this.state.scale === 'percent'}
                    />
                    <label htmlFor="contactChoice2" style={{ fontSize: '12px' }}>Percent</label>
                  </div>
                  <div className={competitionStyles.selectWrapper2}>
                    <input type="radio"
                           id="contactChoice3"
                           name="xAxisUnit"
                           value="dollars"
                           onChange={this.setUnitFn}
                           checked={this.state.unit === 'dollars'}
                    />
                    <label htmlFor="contactChoice3" style={{ fontSize: '12px' }}>Dollars</label>

                    <input type="radio"
                           id="contactChoice4"
                           name="xAxisUnit"
                           value="actions"
                           onChange={this.setUnitFn}
                           checked={this.state.unit === 'actions'}
                    />
                    <label htmlFor="contactChoice4" style={{ fontSize: '12px' }}>Actions</label>
                  </div>
                </form>
              </div>

              <div className={competitionStyles.barChartDiv}>
                <Barchart data={this.state.data}
                          unit={this.state.unit}
                          scale={this.state.scale}
                          clickEvent={this.handleYAxisCheckboxChange}
                          _onloadFunctions={this.drawSummaryTableModule}
                          _svgClass={competitionStyles.svg}
                >
                </Barchart>
              </div>

            </Grid>
          </div>
        </ToolLayout>
      </>
    )
  }
}

export default CompetitionInContractingPage

export const IndexQuery = graphql`
  query {
    allCicDataJson {
      nodes {
        name
        cfo
        competedActions
        competedDollars
        notCompetedActions
        notCompetedDollars
        id
        displayed
        percentActionsCompeted
        percentDollarsCompeted
        totalActions
        totalDollars
      }
    }
  }
`
