import React, { Component } from 'react';

import Accordion from '../../components/accordion/accordion';
import Grid from '@material-ui/core/Grid';
import Reset from '../../components/reset/reset';
import SEO from '../../components/seo';
import Share from '../../components/share/share';
import SunburstContainer from "../../containers/sunburst-vega-container/sunburst-vega-container";
import ToolLayout from '../../components/layouts/tool/tool';

export default class ContractExplorerPage extends Component {
	constructor(props) {
		super(props);
	}

  render = () => <>
		<SEO title='Contract Explorer' keywords={[`gatsby`, `application`, `react`]} />
		<ToolLayout title='Contract Federal Explorer'
			introSentence="The federal government spends about $500 billion each year on contracts - that's roughly the size of Sweden's economy."
			contextStatement="Ever wonder who's getting federal contracts and what agencies are awarding them? This tool lets you explore contract-related information for FY 17, including which organizations received federal contracts, contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government."
			sectionTitle='How does the government buy things?'
			sectionText='<p>The federal government uses contracts to buy the things it needs, from office furniture to airplanes. It also uses contracts to buy services ranging from internet to research and development. Federal agencies and their sub-agencies are responsible for issuing contracts and categorizing the goods and services they purchase using Product and Service Codes (PSC).</p>
			<p>Although contracts and grants share some similarities, each serves a different purpose. Generally, contracts allow the government to purchase goods and services it will use to execute its mission, while grants allow the government to provide goods and services directly to the public. For example, the Air Force uses contracts to acquire fighter jets to execute its mission, while the Federal Highway Administration uses grants to provide funds to states for public roads.</p>'
		>
			<Accordion
				title='Instructions'>
				This diagram has three rings. The inner ring represents federal agencies, like the Department of Defense, which are sized by the total dollar amounts they spent on contracts in FY 17. The middle ring represents sub-agencies, like the Air Force, which in most cases actually award contracts to contractors. The outer ring represents the contractors who receive awards from those sub-agencies.
				<ul>
					<li>Hover over any part of the diagram to get a preview of the information featured in the next layer</li>
					<li>Click on an agency (inner ring), sub-agency (middle ring), or contractor (outer ring) to zoom in on that entity and get more detailed information about it</li>
					<li>Click the white center circle to reset the sunburst</li>
					<li>To find a specific agency or contractor by name, type the name into the search bar.</li>
				</ul>
			</Accordion>
			<Grid container justify='flex-end'>
				<Grid item><Reset /></Grid>
				<Grid item><Share location={this.props.location} /></Grid>
			</Grid>

			<Grid
				container
				spacing = {4}>

				<Grid item xs={6} sm={12} >
					details here
				</Grid>

				<Grid item xs={6} sm={12}>
          <SunburstContainer />
				</Grid>
			</Grid>

		</ToolLayout>
	</>

}


