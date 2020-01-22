import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import Grid from '@material-ui/core/Grid';

import Dendro from '../../components/visualizations/federal-account-explorer/dendro.jsx';
import FY17Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY17.csv';
import FY18Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY18.csv';
import FY19Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY19Q3.csv';

import Accordion from "../../components/accordion/accordion";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share";
import ToolLayout from "../../components/layouts/tool/tool";
import ControlBar from "../../components/control-bar/control-bar";
import Downloads from "../../components/section-elements/downloads/downloads";


class FederalAccountExplorerPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fiscalYearVal: 'fy19', // default fy19
    };
  }

  radioCheck = (event) => {
    this.setState({
      fiscalYearVal: event.target.value
    });
  };

  fiscalYearCheck = () => {
    if (this.state.fiscalYearVal === 'fy19') return '/data/federal-account-explorer/fy19.csv';
    if (this.state.fiscalYearVal === 'fy18') return '/data/federal-account-explorer/fy18.csv';
    if (this.state.fiscalYearVal === 'fy17') return '/data/federal-account-explorer/fy17.csv';
    else return '';
  };

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
                         hwctaLink={this.props.location.pathname + '/methodologies'}
             >
               <SEO title="Federal Account Explorer" keywords={[`gatsby`, `application`, `react`]} />
               <Accordion
                 title="Instructions">
                 <ul>
                   <li>On the first branch, click any agency to reveal how that agency is organized into sub-agencies.</li>
                   <li>On the second branch, click any sub-agency to reveal that sub-agency's federal accounts.</li>
                   <li>On the third branch, click any any federal account to go to its Federal Account Profile on USAspending.gov. There, you will find an account description, how much money flowed in and out of the account in a fiscal year, and more.</li>
                   <li>Click and drag the visualization to re-center.</li>
                   <li>Use the reset button at the top left corner to reset the visualization.</li>
                 </ul>
               </Accordion>

               <ControlBar>
                 <Reset id='resetBtn'/>
                 <Share location={this.props.location}/>
               </ControlBar>

               <Dendro radioCheck={this.radioCheck} fy17={FY17Data} fy18={FY18Data} fy19={FY19Data}/>

               <Downloads
                 href={this.fiscalYearCheck()}
                 date={'March 2019'}
               />
               
             </ToolLayout>
           </>;
  }
}

export default FederalAccountExplorerPage;

