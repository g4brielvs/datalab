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
      </ToolLayout>
    </>
  }
}

export default CompetitionInContractingPage

