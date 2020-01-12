import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import Accordion from "../../components/accordion/accordion";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share";
import ToolLayout from "../../components/layouts/tool/tool";
import ControlBar from "../../components/control-bar/control-bar";

import loadable from '@loadable/component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"
const DendroContainer = loadable(() => import("src/containers/fed-acct/fed-acct-container"),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

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

               <DendroContainer />

             </ToolLayout>
           </>;
  }
}

export default FederalAccountExplorerPage;

