import React, {Component} from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";
import './homelessness-analysis.scss';
import DataModule from "../../components/visualizations/federal-employees/util/data-module";

/* components */
import StoryLayout from "../../components/layouts/story/story";
import Geography from "../../page-sections/homelessness-analysis/geography"
import FederalPrograms from "../../page-sections/homelessness-analysis/federal-programs"
import ContinuumCare from "../../page-sections/homelessness-analysis/continuum-care"
import FinalThoughts from "../../page-sections/homelessness-analysis/final-thoughts"
import StorySection from "../../components/section-elements/story-section/story-section"

class FederalEmployeesPage extends Component {

  sectionComponents = {
    geography: Geography,
    federalPrograms: FederalPrograms,
    continuumCare: ContinuumCare,
    finalThoughts: FinalThoughts
  }

  render() {
    const sections =
      [
        {
          section: "Geography",
          number: "01",
          subtext: "Federal Programs",
          subblurb: "Breakdown of homeless population by region",
          sectionTeaser:["How much was invested in homelessness ", <span key='teaser-callout' className='homeless-analysis-header-callout'>by region?</span>],
          introBlurb: <div><p>People experiencing homelessness are counted once a year (in late January) by grantees who
           receive funding from HUD's Continuum of Care program. This program is the largest federal
            program related to homelessness.<span className='superscript'>1</span> It requires grantees to collect reliable data on the total
            number of people experiencing homelessness who reside in the grantee's geographic area.<span className='superscript'>2</span></p>
            <p>State and local governments create the Continuum of Care regions. They reflect how each community
            organizes itself and applies for funding from HUD's Continuum of Care program. HUD allows Continuum of
            Care grantees to use multiple approaches to complete their count, if necessary. Grantees may use a
              census approach, a sampling approach, or a combination of the methods.<span className='superscript'>3</span></p></div>,
          tagName: "geography",
        },
        {
          section: "Federal Programs",
          number: "02",
          subtext: "Federal Programs",
          subblurb: "How much did each region spend on homelessness",
          sectionTeaser: ["Federal programs that ", <span key='teaser-callout' className='homeless-analysis-header-callout'>address homelessness</span>],
          introBlurb: <div>
            <p>The Department of Housing and Urban Development plays a lead role in federal efforts to
              address homelessness, although multiple federal agencies manage programs that provide
              services including education, employment, housing resources, and more.</p>
            <p>Our analysis identified 33 federal programs that explicitly flagged homeless individuals
              as beneficiaries. These included programs that named homeless individuals as primary
              targets of services or as one of the program's target recipient groups.<span
                className='superscript'>4</span> We found that
              programs targeting homelessness focus either on all individuals experiencing homelessness,
              or on a subset, such as veterans or youth. These programs provide various types of assistance,
              which we divided into six categories: housing, food, education, employment, health, and support
              services.</p>
          </div>,
          tagName: "federalPrograms",
        },
        {
          section: "Continuum Care",
          number: "03",
          subtext: "Continuum Care",
          subblurb: "Clustering administrative regions",
          sectionTeaser: ["Which Continuum of Care areas are similar ", <span key='teaser-callout' className='homeless-analysis-header-callout'>to each other?</span>],
          introBlurb: <div>
            While the section above allows you to compare Continuum of Care areas that are neighbors geographically, we wanted to explore if Continuum of Care areas were similar along characteristics other than geography. It may be helpful for those working in the field to know what types of funding their neighbors are receiving and to know what regions are similar to their own regardless of location. Using an unsupervised machine learning algorithm, we clustered Continuum of Care areas based on a variety of attributes, such as population, income, and the prevalence of mental illness.
          </div>,
          tagName: "continuumCare",
        },
        {
          section: "Final Thoughts",
          number: "04",
          subtext: "Final Thoughts",
          subblurb: "What are the investments used for?",
          sectionTeaser: ["Which are the investments ", <span key='teaser-callout' className='homeless-analysis-header-callout'>used for?</span>],
          introBlurb: <div>As these visualizations depict, thousands of people are homeless across the United States.
           We hope that this analysis show how federal funding impacts homelessness and can serve as a useful tool for state and local governments,
           as well as private institutions, who are working to reduce homelessness.
           In addition, we chose to conduct this analysis because it features data from across multiple federal agencies,
           which is all available in one dataset. <br /><br />
           Analysts and users who have ideas for other types of analyses, whether featuring contracts or financial assistance across the federal government,
           can use the Data Lab's Analyst Guide for guidance and hints as they use the data.<br /><br />
            Do you want to provide feedback or ask a question? Send feedback&nbsp;
            <a className='homelessness-link' href='https://usaspending-help.zendesk.com/hc/en-us/community/topics'>here!</a><br /></div>,
          tagName: "finalThoughts",
        },
      ];

    return <>
      <div id='homelessnessPage'>
        <StoryLayout title={'Homelessness Analysis'}
                            introSentence={'On a single night in 2016, more than 500,000 people experienced homelessness in the United States.'}
                            contextStatement={['Multiple federal, state, and local programs offer support to people experiencing homelessness. Our visualizations display federal financial data to show the breakdown of funding spent to address homelessness.']}
                            sectionToc={sections}

        >
          <SEO title="Federal Employees" keywords={[`gatsby`, `application`, `react`]}/>


          {
            sections.map((item, key) => {
              const SectionTag = this.sectionComponents[item.tagName];
              return (
                <StorySection key={key} header={item}>
                  <SectionTag sectionId={'section-' + item.section} dataSource={DataModule}/>
                </StorySection>
              )
            })
          }


        </StoryLayout>
      </div>
    </>
  }
}

export default FederalEmployeesPage

