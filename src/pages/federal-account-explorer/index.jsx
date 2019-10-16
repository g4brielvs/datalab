import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import Grid from '@material-ui/core/Grid';

import Dendro from '../../components/visualizations/federal-account-explorer/dendro.jsx';
import FY17Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY17.csv';
import FY18Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY18.csv';
import FY19Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY19Q3.csv';

import Accordion from "../../components/accordion/accordion";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share";
import ToolLayout from "../../components/layouts/tool/tool";

class FederalAccountExplorerPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return <>
             <ToolLayout title='Federal Account Explorer'
                         introSentence='Did you know that the government has almost 2,000 federal spending accounts?'
                         contextStatement="Ever wonder who's getting federal contracts and what agencies are awarding them?
                         This tool lets you explore contract-related information for FY 17, including which organizations received federal contracts, 
                         contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government."
                         sectionTitle='How do agencies receive and spend money?'
                         sectionText='Every fiscal year, Congress decides how much money to give the federal government through its budgeting 
                         and appropriations process. These funds, or appropriations, are then designated for specific purposes 
                         and placed in specific federal accounts for each agency to use.'
             >
               <SEO title="Federal Account Explorer" keywords={[`gatsby`, `application`, `react`]} />
               <Accordion
                 title="Instructions">
                 <ul>
                   <li>xxx</li>
                   <li>xxx</li>
                   <li>xxx</li>
                 </ul>
               </Accordion>

               <Grid container justify='flex-end'>
                 <Grid item><Reset /></Grid>
                 <Grid item ><Share
                               location={this.props.location}/></Grid>
               </Grid>

               <Dendro fy17={FY17Data} fy18={FY18Data} fy19={FY19Data} />

             </ToolLayout>
           </>;
  }
}

export default FederalAccountExplorerPage;

