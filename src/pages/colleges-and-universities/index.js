import React, {Component} from "react";
import SEO from "../../components/seo";

import Story from "../../components/layouts/story/story";
import "../../styles/index.scss";

/* components */
import Header from "../../components/header/header";
import HWCTALink from "../../components/hwcta-link/hwcta-link";
import Overview from "../../page-sections/colleges-and-universites/overview";
import Agencies from "../../page-sections/colleges-and-universites/agencies";
import Categories from "../../page-sections/colleges-and-universites/categories";
//import Institutions from "../../page-sections/colleges-and-universites/institutions";
import MoreAnalyses from "../../components/more-analyses/more-analyses";
import Footnotes from "../../components/footnotes/footnotes";
import Toc from "../../components/toc/toc";
import PageFooter from "../../components/footers/page";
import SiteFooter from "../../components/footers/site";

class CollegesAndUniversitiesPage extends Component {


    render() {
	return <><Story>
	    <SEO title="Colleges and Universities" keywords={[`gatsby`, `application`, `react`]}/>
	    <Header
        subtext={'Federal Investment in Higher Education'}
        subblurb={['Explore the Federal Investment in your ', <br key="subblurb-linebreak"/>,
		   <span key="subblurb-callout" className={'header--red'}>Alma Mater</span>]}
        blurb={['Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?',
		<br key="blurb-linebreak"/>,
		'Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students.']}
	    />


	    <Toc
        sections={
            [{
		section: "one",
		number: "01",
		subtext: "Investment Overview",
		subblurb: "WHAT IS A FEDERAL INVESTMENT?",
		blurb: "Learn more about the three categories of federal investments: student aid, grants, and contracts."
            },
             {
		 section: "two",
		 number: "02",
		 subtext: "My Alma Mater",
		 subblurb: "How much did my school receive?",
		 blurb: "Search for your school and discover details about federal funding at your alma mater."
             },
             {
		 section: "three",
		 number: "03",
		 subtext: "Agency Investment",
		 subblurb: "Which federal agencies are involved?",
		 blurb: "Find out which federal agencies provide investments and in what amounts."
             },
             {
		 section: "four",
		 number: "04",
		 subtext: "Investment Categories",
		 subblurb: "What are the investments used for?",
		 blurb: "Discover more about what is funded by federal investment."
             },
            ]}
	    />

	    <Overview/>

	    <Footnotes
        footnotes={['Financial obligations represent outstanding debt or regular payments to another party. A negative value obligation (de-obligation) results from a transaction that lowers the debt amount. A grant or contract has a negative obligation for a given fiscal year when it spans multiple fiscal years and the sum of the transactions for that particular fiscal year was a net reduction of the original obligation.',
			'Due to the way military academies are funded, they have not been included in this analysis.']} />

	    <HWCTALink
    	    url={"https://datalab.usaspending.gov/colleges-and-universities-more.html"}/>

      {/* <MoreAnalyses/> */}
	</Story>
    </>
    }
}

export default CollegesAndUniversitiesPage


// export const CollegesAndUniversitiesQuery = graphql`
// query {
//   allUnivBubbleChartCsv {
//     nodes {
//       agency
//       subagency
//       obligation
//     }
//   },
// }`
