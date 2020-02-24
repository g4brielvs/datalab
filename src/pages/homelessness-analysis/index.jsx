import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";
import './homelessness-analysis.scss';
import DataModule from "../../components/visualizations/federal-employees/util/data-module";

/* components */
import StoryLayout from "../../components/layouts/story/story";
import FinalThoughts from "../../page-sections/homelessness-analysis/final-thoughts";
import StorySection from "../../components/section-elements/story-section/story-section";

import loadable from '@loadable/component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const Geography = loadable(() => import('src/page-sections/homelessness-analysis/geography'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const FederalPrograms = loadable(() => import('src/page-sections/homelessness-analysis/federal-programs'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const ContinuumCare = loadable(() => import('../../page-sections/homelessness-analysis/continuum-care'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

export default class HomelessnessPage extends Component {

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
          sectionTeaser: ["How much was invested in homelessness ", <span key='teaser-callout' className='homeless-analysis-header-callout'>by region?</span>],
          introBlurb: <div><p>People experiencing homelessness are counted once a year (in late January) by grantees who
            receive funding from the U.S Department of Housing and Urban Development's (HUD) Continuum of Care program. This program is the largest federal
            program related to homelessness.<span className='superscript'>1</span> It requires grantees to collect reliable data on the total
            number of people experiencing homelessness who reside in the grantee's geographic area.<span className='superscript'>2</span></p>
            <p>State and local governments create the Continuum of Care regions. These regional divisions reflect how each community organizes
              itself and applies for funding from HUD's Continuum of Care program. HUD allows Continuum of
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
            <p>
              Federal funding is just one piece of the puzzle - states, municipalities, and other organizations play a large
              role in providing funds to address homelessness. While we did not conduct a comprehensive analysis of the relationship
              between federal, state, local, and private funding sources for programs that alleviate homelessness across the country,
              numerous examples show federal funding works as part of a larger network of support.
            </p>
            <p>
              For example, the city of New York spent $3.2 billion on homelessness programs in 2019,<span className='superscript'>5</span> compared with about $134
              million from federal programs (including those where homeless individuals are one of several beneficiaries).
            </p>
            <p>
              The city of San Francisco expects to spend $305 million on similar programs in 2019,<span className='superscript'>6</span> compared to the $43 million
              they received in federal funding.<span className='superscript'>7</span>
            </p>
            <p>
              And, to cite an example of private funding, the Church of Latter Day Saints donated $42 million between 2007 and 2017 to build housing
              in Salt Lake City for people experiencing chronic homelessness.<span className='superscript'>8</span>
            </p>
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
          sectionTeaser: ["What are the investments ", <span key='teaser-callout' className='homeless-analysis-header-callout'>used for?</span>],
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

    return (
      <div id='homelessnessPage'>
        <StoryLayout
          title={'Homelessness Analysis'}
          introSentence={'On a single night in 2018, more than 550,000 people experienced homelessness in the United States.'}
          contextStatement={['Multiple federal, state, and local programs offer support to people facing homelessness. Our visualizations display federal financial data to show the breakdown of funding spent to address this problem.']}
          sectionToc={sections}
          hwctaLink={this.props.location.pathname + '/methodologies'}

        >
          <SEO title='Homelessness Analysis' keywords={[`gatsby`, `application`, `react`]} />
          {
            sections.map((item, key) => {
              const SectionTag = this.sectionComponents[item.tagName];
              return (
                <StorySection key={key} header={item}>
                  <SectionTag sectionId={'section-' + item.section} dataSource={DataModule} location={this.props.location} />
                </StorySection>
              )
            })
          }
        </StoryLayout>
      </div>
    )
  }
}
