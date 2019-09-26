import React, {Component} from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import Grid from '@material-ui/core/Grid';
/* components */
import Accordion from "../../components/accordion/accordion";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share"
import ToolLayout from "../../components/layouts/tool/tool";

class CompetitionInContractingPage extends Component {
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
    return <>
      <ToolLayout title={pageTitle}
                  introSentence={introSentence}
                  contextStatement={contextSentence}
                  sectionTitle={sectionTitle}
                  sectionText={sectionText}>
        <SEO title="Competition in Contracting" keywords={[`gatsby`, `application`, `react`]}/>
        <Accordion
          title="Instructions">
          <ul>
            <li>Click the toggle to switch between raw numbers and percent for each agency</li>
            <li>Click the toggle to switch between total dollars obligated and the number of contracting actions</li>
            <li>Click the check box beside each agency to remove or add it to the visualization and re-scale the horizontal axis.</li>
          </ul>
        </Accordion>
        <Grid container justify='flex-end'>
          <Grid item><Reset /></Grid>
          <Grid item ><Share /></Grid>
        </Grid>

          <div className="viz-container">
            <div className="competition-in-contracting">

              <div id="summary">
                <div id="tooltip" className="tooltip-module"></div>

                <div className="summary-item">
                  <p style={{color: '#2a5da8'}}>$ COMPETED</p>
                  <h2 id="competed-dollars"></h2>
                </div>
                <div className="summary-item" style={{borderRight: '2px solid #a4a4a4'}}>
                  <p style={{color: '#2a5da8'}}>ACTIONS COMPETED</p>
                  <h2 id="competed-actions"></h2>
                </div>
                <div className="summary-item">
                  <p style={{color: '#2a5da8'}}>$ NOT COMPETED</p>
                  <h2 id="not-competed-dollars"></h2>
                </div>
                <div className="summary-item">
                  <p style={{color: '#2a5da8'}}>ACTIONS NOT COMPETED</p>
                  <h2 id="not-competed-actions"></h2>
                </div>
              </div>

              <div>
                <div className="legend" id="notCompeted">
                  <svg height="15" width="15">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#D334BA"/>
                  </svg>
                  <label htmlFor="notCompeted" style={{fontSize:'12px', verticalAlign: 'bottom'}}>Not Competed</label>
                </div>
                <div className="legend" id="competed">
                  <svg height="15" width="15">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#0071bc"/>
                  </svg>
                  <label htmlFor="contactChoice1" style={{fontSize:'12px', verticalAlign: 'bottom'}}>Competed</label>
                </div>
                <form id="barchartToolbar">
                  <div className="select-wrapper1">
                    <input type="radio" id="contactChoice1" name="xAxisScale" value="quantity" />
                    <label htmlFor="contactChoice1" style={{fontSize:'12px'}}>Quantity</label>

                    <input type="radio" id="contactChoice2" name="xAxisScale" value="percent"/>
                    <label htmlFor="contactChoice2" style={{fontSize:'12px'}}>Percent</label>
                  </div>
                  <div className="select-wrapper2">
                    <input type="radio" id="contactChoice3" name="xAxisUnit" value="dollars" />
                    <label htmlFor="contactChoice3" style={{fontSize:'12px'}}>Dollars</label>

                    <input type="radio" id="contactChoice4" name="xAxisUnit" value="actions"/>
                    <label htmlFor="contactChoice4" style={{fontSize:'12px'}}>Actions</label>
                  </div>
                </form>
              </div>


              <div>
                <svg width="1200" height="700" viewBox="0 0 1200 700" id="barchartSvg"></svg>
              </div>

            </div>
          </div>
      </ToolLayout>
    </>
  }
}

export default CompetitionInContractingPage

