import React, {Component} from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";
import fedEmpStyles from './index.module.scss';

/* components */
import StoryLayout from "../../components/layouts/story/story";
import Who from "../../page-sections/federal-employees/who"
import Where from "../../page-sections/federal-employees/where"
import What from "../../page-sections/federal-employees/what"
import StorySection from "../../components/section-elements/story-section/story-section"

class FederalEmployeesPage extends Component {

		sectionComponents = {
			who: Who,
			where: Where,
			what: What
		}

    render() {
			const sections =
				[
					{
						section: "Who",
						number: "01",
						subtext: "Who",
						subblurb: "How much do agencies spend on personnel?",
						sectionTeaser:["How much do agencies spend ", <span key='teaser-callout' className={fedEmpStyles.headingBlue}>on personnel?</span>],
						introBlurb: "In Fiscal Year 2017 (FY 2017), the largest 24 federal agencies - known as CFO Act Agencies* - obligated a total of $115 billion in personnel compensation. Government-wide spending on personnel compensation (base salaries) is distributed across these agencies, with the largest amount of personnel spending made by the Department of Defense, followed by the Department of Veterans Affairs.",
						tagName: "who",
					},
					{
						section: "Where",
						number: "02",
						subtext: "Where",
						subblurb: "Where do federal employees work?",
						sectionTeaser: ["Where do ", <span key='teaser-callout' className={fedEmpStyles.headingBlue}>federal employees work?</span>],
						introBlurb: "CFO Act agencies employ 1.9 million people across the nation. The largest number of employees live and work in the District of Columbia, California, Virginia, Maryland, and Texas. Nearly a quarter of CFO Act agency employees (407,000 people) are located in 'the DMV area' -the District of Columbia, Maryland, or Virginia.",
						tagName: "where",
					},
					{
						section: "What",
						number: "03",
						subtext: "What",
						subblurb: "What do federal employees do?",
						sectionTeaser: ["What do ", <span key='teaser-callout' className={fedEmpStyles.headingBlue}>federal employees do?</span>],
						introBlurb: "Federal employees serve in highly varied occupations. The following interactive visualization lists the main occupational categories, each of which includes several job types that are grouped by function - for example, administrative, medical, legal, or engineering. The occupation data also makes a distinction between blue-collar jobs (for example, warehousing) and white-collar jobs (for example, information technology). Across all CFO Act agencies, the top two occupation categories are Administrative and Clerical and Medical, Hospital, Dental, and Public Health.\n" +
							"To explore the distribution of workers across occupation categories for each agency, select an agency from the menu.",
						tagName: "what",
					},
				];

			return <><StoryLayout title={'Federal Employees'}
												introSentence={'In 2017, the largest 24 federal agencies employed nearly 2 million people.'}
												contextStatement={['The U.S. Treasury’s Data Lab presents an analysis exploring federal employees using federal financial data and employment data from the Office of Personnel Management (OPM). In 2017, the 24 CFO Act Agencies employed nearly people.']}
												sectionToc={sections}

	>
	    <SEO title="Federal Employees" keywords={[`gatsby`, `application`, `react`]}/>


		{
			sections.map((item, key) => {
				const SectionTag = this.sectionComponents[item.tagName];
				return (
					<StorySection key={key} header={item}>
						<SectionTag sectionId={'section-' + item.section}/>
					</StorySection>
				)
			})
		}


	</StoryLayout>
    </>
    }
}

export default FederalEmployeesPage

