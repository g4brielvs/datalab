import React from 'react';
import PropTypes from 'prop-types';
import styles from './tool.module.scss';

import Grid from '@material-ui/core/Grid';
import Default from '../default/default';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';
import PageHeader from '../../headers/page';

export default class ToolLayout extends React.Component {
  render = () =>

  <Default>
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
            {name: 'Competition In Contracting', link: '/competition-in-contracting'}
          ]},
        {
          express: [
            /* {name: 'Research and Development in Contracting', link: '/test-link'}, */
            /* {name: 'Women-Owned Small Businesses', link: '/test-link'} */
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
      isHome={ false }>
    </PageHeader>
    <div className={styles.toolPage}>
      <header className={styles.header}>
        <Grid container justify='space-between'>
          <Grid item className={styles.title}>{this.props.title}</Grid>
        </Grid>
      </header>
      <section>
        <p className={styles.intro} dangerouslySetInnerHTML={{ __html: this.props.introSentence }}></p>
        <p className={styles.p} dangerouslySetInnerHTML={{ __html: this.props.contextStatement }}></p>
      </section>

      <main className={styles.main}>
        <article>
          <section className={styles.childrenSection}>
            {this.props.children}
          </section>
          <section className={styles.followUp}>
            <Grid container>
              <Grid item xs={12} sm={4} lg={5}>
                <div className={styles.bodyIntro} dangerouslySetInnerHTML={{ __html: this.props.sectionTitle }}></div>
              </Grid>
              <Grid item xs={12} sm={8} lg={7}>
                <div dangerouslySetInnerHTML={{ __html: this.props.sectionText }}></div>
              </Grid>
            </Grid>
          </section>
        </article>
      </main>
      <HWCTALink url={this.props.hwctaLink || '#'} _mainClass={styles.hwcta} _noOffset='true' />
      <MoreAnalyses />
    </div>
  </Default>
}


ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionText: PropTypes.string,
  hwctaLink: PropTypes.string,
}

// export default ToolLayout
