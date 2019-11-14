import styles from './faq.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '../../accordion/accordion';
import Default from '../default/default';
import { Grid } from '@material-ui/core';
import MoreAnalyses from '../../more-analyses/more-analyses';
import PageHeader from '../../headers/page';
import ShareMenu from "../../share-menu/share-menu"
import ControlBar from "../../control-bar/control-bar"

const FaqLayout = (props) => {
  let header, content;

  if (!props.isCustomHeader) {
    header =
      <div className={styles.header}>
        {props.heroImage ?
        <Grid container justify='center' direction='column'>
          <Grid item xs={12} className={styles.heroImage}>
            {props.heroImage}
          </Grid>
        </Grid>
        : ''}
        <Grid container>
          <Grid item xs={12} sm={11} className={styles.share}>
            <ShareMenu location={props.location}/>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={11} md={10} xl={8}>
            <header className={styles.headerHero} >
              <h1 className={styles.title}>
                {props.title}
              </h1>
              <div className={styles.introSentence}>
                {props.introSentence}
              </div>
            </header>
          </Grid>
        </Grid>
      </div>
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
            {name: 'Analyst Guide', link: '/analyst-guide'},
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

    <div className={styles.faqPage}>
      {header}
      <Grid container justify='center' className={styles.childrenContainer}>
        <Grid item xs={11} md={10} xl={8}>
          {props.children}
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={11} md={10}>
          <MoreAnalyses />
        </Grid>
      </Grid>
    </div>

  </Default>
};

export default FaqLayout;

FaqLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

