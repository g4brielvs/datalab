import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import Grid from '@material-ui/core/Grid';

import Accordion from "../../components/accordion/accordion";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share"
import ToolLayout from "../../components/layouts/tool/tool";

class FederalAccountExplorerPage extends Component {
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
                    <Grid item ><Share /></Grid>
                </Grid>
            </ToolLayout>
        </>
    }
}

export default FederalAccountExplorerPage

