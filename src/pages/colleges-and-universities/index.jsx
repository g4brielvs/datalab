import './cu.scss';
import React from 'react';

import Agencies from '../../page-sections/colleges-and-universites/agencies';
import Categories from '../../page-sections/colleges-and-universites/categories';
import CustomHeader from '../../page-sections/colleges-and-universites/custom-header/custom-header';
import CustomToc from '../../page-sections/colleges-and-universites/custom-toc/custom-toc';
import Footnotes from '../../components/footnotes/footnotes';
import Institutions from '../../page-sections/colleges-and-universites/institutions';
import Overview from '../../page-sections/colleges-and-universites/overview';
import SEO from '../../components/seo';
import StoryLayout from '../../components/layouts/story/story';
import { Hidden } from '@material-ui/core';

class CollegesAndUniversitiesPage extends React.Component {
  render = () => <>
    <StoryLayout isCustomHeader={true}>
      <SEO title='Colleges and Universities' keywords={[`gatsby`, `application`, `react`]} />

      <CustomHeader
        subtext={'Federal Investment in Higher Education'}
        subblurb={['Explore the Federal Investment in your ', <br key='subblurb-linebreak' />,
          <span key='subblurb-callout' className={'header--red'}>Alma Mater</span>]}
        blurb={['Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?',
          <br key='blurb-linebreak' />,
          'Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students.']}
      />

      <CustomToc
        sections={
          [{
            section: 'one',
            number: '01',
            subtext: 'Investment Overview',
            subblurb: 'WHAT IS A FEDERAL INVESTMENT?',
            blurb: 'Learn more about the three categories of federal investments: student aid, grants, and contracts.'
          },
          {
            section: 'two',
            number: '02',
            subtext: 'My Alma Mater',
            subblurb: 'How much did my school receive?',
            blurb: 'Search for your school and discover details about federal funding at your alma mater.'
          },
          {
            section: 'three',
            number: '03',
            subtext: 'Agency Investment',
            subblurb: 'Which federal agencies are involved?',
            blurb: 'Find out which federal agencies provide investments and in what amounts.'
          },
          {
            section: 'four',
            number: '04',
            subtext: 'Investment Categories',
            subblurb: 'What are the investments used for?',
            blurb: 'Discover more about what is funded by federal investment.'
          },
          ]}
      />

      <main className='main'>
        <Overview location={this.props.location} />

        <Institutions location={this.props.location} />

        <Agencies location={this.props.location} />

        {/* <Categories location={this.props.location} /> */}
      </main>

      <Footnotes
        footnotes={['Financial obligations represent outstanding debt or regular payments to another party. A negative value obligation (de-obligation) results from a transaction that lowers the debt amount. A grant or contract has a negative obligation for a given fiscal year when it spans multiple fiscal years and the sum of the transactions for that particular fiscal year was a net reduction of the original obligation.',
          'Due to the way military academies are funded, they have not been included in this analysis.']} />
    </StoryLayout>
  </>

}

export default CollegesAndUniversitiesPage;
