import './story.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Default from '../default/default';
import { Grid } from '@material-ui/core';
import HwctaLink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';
import PageHeader from '../../headers/page';
import Toc from '../../toc/toc';

const StoryLayout = (props) => {
  let header, toc;

  if (!props.isCustomHeader) {
    header =
      <Grid container>
        <Grid item>
          <header className='header--hero' >
            <p className='header__title'>
              {props.title}
            </p>
            <p className='header__introSentence'>
              {props.introSentence}
            </p>
            <p className='header__contextStatement'>
              {props.contextStatement}
            </p>
          </header>
        </Grid>
      </Grid>;

    toc = <Toc sections={props.sectionToc} />;
  }

  return <Default>
    <PageHeader
      headerItems={['Analyses', 'DataLab Express', "America's Finance Guide", 'Resources', 'Glossary']}
            megamenuItems={[
              {
              analyses: [
                {name: 'Colleges and Universities', link: '/colleges-and-universities'},
                {name: 'DTS Tracker', link: '/dts'},
                {name: 'Contract Spending Analysis', link: '/contracts-over-time'},
                {name: 'Federal Account Explorer', link: '/federal-account-explorer'},
                {name: 'Contract Explorer', link: '/contract-explorer'},
                {name: 'Homelessness Analysis', link: '/homelessness-analysis'},
                {name: 'Budget Function', link: '/budget-function'},
                {name: 'Federal Employees', link: '/federal-employees'},
                {name: 'Competition In Contracting', link: '/competition-in-contacting'}
              ]},
              {
              express: [
                {name: 'Research and Development in Contracting', link: '/test-link'},
                {name: 'Women-Owned Small Businesses', link: '/test-link'}
              ]},
              {
              ffg: [
                {header: 'Overview', name: "America's Finance Guide", link: '#'},
                {header: 'Revenue', name: 'Revenue and GDP', link: '#'},
                {header: 'Revenue', name: 'Revenue Categories', link: '#'},
                {header: 'Revenue', name: 'Federal Revenue Trends', link: '#'},
                {header: 'Revenue', name: 'Country Comparison', link: '#'},
                {header: 'Spending', name: 'Spending and GDP', link: '#'},
                {header: 'Spending', name: 'Spending Categories', link: '#'},
                {header: 'Spending', name: 'Federal Spending Trends', link: '#'},
                {header: 'Spending', name: 'Country Comparison', link: '#'},
                {header: 'Deficit', name: 'Explore Deficit', link: '#'},
                {header: 'Deficit', name: 'Federal Deficit Trends', link: '#'},
                {header: 'Deficit', name: 'Country Comparison', link: '#'},
                {header: 'Debt', name: 'Explore Debt', link: '#'},
                {header: 'Debt', name: 'Federal Debt Trends', link: '#'},
                {header: 'Debt', name: 'Federal Debt Analysis', link: '#'},
                {header: 'Debt', name: 'Country Comparison', link: '#'},
              ]},
              {
              resources: [
                {name: 'Analyst Guide', link: '#'},
                {name: 'API Guide', link: 'http://api.usaspending.gov'},
                {name: 'Data Model', link: 'https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html'},
                {name: "Student Innovator's Toolbox", link: '/student-innovators-toolbox'},
              ]},
              {
              glossary: [
                {name: 'Glossary', link: '#'}
              ]},
            ]
            }
            isHome={ false }
           />

      <div className='story-page'>
        {header}
        {toc}
        {props.children}
        <HwctaLink url={'#'} />
        <MoreAnalyses />
      </div>

  </Default>
};

export default StoryLayout;

StoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

